const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.redirect("/login");

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.redirect("/login");
    req.user = decoded;
    next();
  });
};

// Routes
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("User already exists");
    }

    user = new User({ username, email, password });
    await user.save();
    res.redirect("/login");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/dashboard");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.get("/dashboard", verifyToken, (req, res) => {
  res.render("dashboard", { user: req.user });
});

app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server started on http://localhost:${process.env.PORT || 3000}`)
);
