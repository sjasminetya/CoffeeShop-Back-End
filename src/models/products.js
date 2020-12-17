const { actionQuery } = require('../helpers/actionQuery')

const productsModels = {
  getProducts: (limit, offset, order) => {
    return actionQuery(`SELECT idProduct, productName, price, stock, photoProduct, description, discountPercent, idTypeProduct, homeDelivery, dineIn, takeAway FROM products ORDER BY productName ${order} LIMIT ${offset},${limit}`)
  },
  getProductById: (idProduct) => {
    return actionQuery('SELECT idProduct, productName, price, stock, photoProduct, description, discountPercent, idTypeProduct, homeDelivery, dineIn, takeAway FROM products WHERE idProduct = ?', idProduct)
  },
  insertProducts: (data) => {
      return actionQuery(`INSERT INTO products SET ?`, data)
  },
  deleteProducts: (idProduct) => {
    return actionQuery(`DELETE FROM products WHERE idProduct = ?`, idProduct)
  },
  updateProducts: (idProduct, data) => {
    return actionQuery(`UPDATE products SET productName = '${data.productName}', price = '${data.price}', stock = '${data.stock}', photoProduct = '${data.photoProduct}', description = '${data.description}', discountPercent = '${data.discountPercent}', idTypeProduct = '${data.idTypeProduct}', homeDelivery = '${data.homeDelivery}', dineIn = '${data.dineIn}', takeAway = '${data.takeAway}' WHERE idProduct = ?`, idProduct)
  }
}

module.exports = productsModels