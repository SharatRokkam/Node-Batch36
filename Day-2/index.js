// Modules and Exports

// Module --> Module is a block of encapsulated code that can be exported and imported to perform some task...
// Modules are way to organize and reuse code in Node.js

// Three types of Modules :
// 1. Core Modules
// 2. Local Modules
// 3. Third-party modules

// Core Modules : are the modules that are inbuilt and comes along with node.js
// like FileSystem, http

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("server connected ");
//   res.setHeader("Content-Type", "text/plain");
//   res.write("Hello World");
//   res.end();
// });

// server.listen(3000, "localhost", () => {
//   console.log("server is running on the port 3000");
// });

//third party module
const express = require("express");
const port = 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello Express");
});

app.get("/twitter", (req, res) => {
  res.send("hello twitter");
});

app.get("/instagram", (req, res) => {
  res.send("hello instagram");
});

app.listen(port, () => {
  console.log("server connected to port");
});
