const express = require("express");
const app = express();
const port = 8000;
const morgan = require("morgan");
const productRoutes = require('./routes/productRoutes')

//Logger
app.use(morgan());

//bodyParser
app.use(express.json());
app.use(express.static("public"));

app.use("/products", productRoutes);


app.listen(port, () => {
  console.log("server is connected to 8000");
});
