const express = require("express");
const fs = require("fs");
const app = express();
const port = 8000;

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
const morgan = require("morgan");

//Logger
app.use(morgan());

//bodyParser
app.use(express.json());
app.use(express.static("public"));

// API - Endpoint / ROUTE - BaseURL - example -> google.com/api/v2

//create POST /products CRUD Operations /user /categories

// MVC - Model View Controller
app.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
});

// Read GET /products
app.get("/products", (req, res) => {
  res.json(products);
});

// Read GET /products/:id
app.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
});

// Read PUT /products/:id
app.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
});

// Read Patch /products/:id
app.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
});

// Read Patch /products/:id
app.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
});

app.listen(port, () => {
  console.log("server is connected to 8000");
});
