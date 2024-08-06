const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Status Code is OK 200 </h1>");
  console.log(res.status(200));
});

app.listen(8000);
