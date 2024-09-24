console.log('Módulo que exporta | API Publica)')

/* function addToCart(product, quantity) {
  console.log(`Has agreagado ${quantity} ${product}`)
}
 */

/* export default function addToCart(product, quantity) {
  console.log(`Has agreagado ${quantity} ${product}`)
} */

  //Exports Nombrados
/* export let cart = [];
export function addToCart(product, quantity) {
  //  const cartItem = {
  //   product: product,
  //   quantity: quantity,
  // } 
    const cartItem = {
      product,
      quantity,
    }
    cart.push(cartItem)
  console.log(`Has agreagado ${quantity} ${product}`)
}
 */

//Renombrar los exports
let cart = [];
function addToCart(product, quantity) {
    const cartItem = {
      product,
      quantity,
    }
    cart.push(cartItem)
  console.log(`Has agreagado ${quantity} ${product}`)
}

const minItems = 5;

export {cart as carrito, addToCart as agregarACarrito, minItems}