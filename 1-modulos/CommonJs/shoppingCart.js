/* console.log('modulo que exporta')

function addToCart(prod, quatity) {
  console.log(`has agregado ${quatity} ${prod}`)
}

// {} = function
module.exports = addToCart; */

let cart = [];

function addToCart(prod, quatity) {
  const cartItem = {
    prod,
    quatity
  }
  cart.push(cartItem)
  console.log(`has agregado ${quatity} ${prod}`)
}
/* 
const objDeExports = {
  cart,
  addToCart
}

module.exports = objDeExports; */

module.exports = {
  cart,
  addToCart,
}