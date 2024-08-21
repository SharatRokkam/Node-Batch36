import express from "express";
const app = express();
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

//Middleware for parsing request body
app.use(express.json());

//Middleware for all the api
app.use("/books", bookRoute);

//cors
// 1st way
// app.use(cors());

// 2nd way
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeader: ["Content-Type"],
  })
);

//database connection
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log(`server is listening to port  ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
