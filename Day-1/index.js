//server creation
// fs module - read, write, append, delete

// COMMONJS 
const http = require("http");

//ES6
// import http from "http";

const fs = require("fs");
const port = 4000;

const server = http.createServer((req, res) => {
  console.log("request has been made from client to server");

  //   console.log(req.method);
  //   console.log(req.url);
  res.setHeader("Content-Type", "text/html");
  //   res.write("<h1>Hello, Welcome to Node.js</h1>");
  //   res.write("<p>This is the second class</p>");
  //   res.end();

  let path = "./views";
  switch (req.url) {
    case "/":
      path += "/index.html";
      break;
    case "/about":
      path += "/About.html";
      break;
      //let services and contact
    default:
      path += "/404.html";
      break;
  }

  fs.readFile(path, (err, fileData) => {
    if (err) {
      console.log(err);
    } else {
    //   res.write(fileData);
      res.end(fileData);
    }
  });
});
server.listen(port, "localhost", () => {
  console.log("server is running on port 4000");
});
