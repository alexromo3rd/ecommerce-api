const products = require('../products.json');

const getProduct = (req, res) => {
  let { id } = req.params;
  let product = products.find(e => e.id === +id);

  if(product !== undefined) {
    res.status(200).send(product); // if found
  } else {
    res.status(500).send('Item not in the list'); // if not found
  }
}

module.exports = getProduct;