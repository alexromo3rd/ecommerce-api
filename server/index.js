const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express();

// port the app runs on
const port = 3000;

// endpoints
app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})