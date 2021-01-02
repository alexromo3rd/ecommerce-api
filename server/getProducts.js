const products = require('../products.json');

const getProducts = (req, res) => {
  let { price } = req.query;
  if(price) {
    let filteredProducts = products.filter(product => product.price >= +price);
    res.status(200).send(filteredProducts);
  } else {
    res.status(200).send(products);
  }
}

module.exports = getProducts;