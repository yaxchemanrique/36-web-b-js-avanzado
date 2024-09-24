console.log('modulo que importa')
let name = 'Yaxche'
const modifiedName = name + '123'
// console.log(modifiedName) 

/* const shoppingCart = require('./shoppingCart.js')
console.log(shoppingCart)
shoppingCart.addToCart('shampoo', 5)
shoppingCart.addToCart('acondicionador', 1)
console.log(shoppingCart.cart) */

const { cart, addToCart } = require('./shoppingCart.js')

addToCart('shampoo', 5)
addToCart('acondicionador', 1)
console.log(cart)


// const os = require('node:os')
// console.log(os)
/* const machine = os.machine()
console.log(machine)
const hostname = os.hostname()
console.log(hostname) */