const express = require("express");
const fs = require("fs");
const app = express();
const port = 8000;

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const product = data.products[0];
const morgan = require("morgan");


//Logger
app.use(morgan());

//bodyParser
app.use(express.json());
// app.use(express.urlencoded);
app.use(express.static("public"));

//Application MiddleWare
// app.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("User-Agent")
//   );
//   next();
// });

const auth = (req, res, next) => {
  console.log(req.query);
  if (req.query.password === "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};

//Router-Level Middleware
app.use(auth);
// API - Endpoint / ROUTE

app.get("/", auth, (req, res) => {
  res.json({ type: "GET" });
  //   res.sendFile("index.html")
});

app.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});
app.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
app.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
app.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

app.get("/", (req, res) => {
  //   res.send(" <h1>Hello Express.js</h1>");
  // res.sendFile("C:/Users/DELL/Desktop/Node.js/Day-4/index.html")
  res.json(product);
});

app.listen(port, () => {
  console.log("server is connected to 8000");
});
