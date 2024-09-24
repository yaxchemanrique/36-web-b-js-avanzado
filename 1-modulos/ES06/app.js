/* import funcAddToCart from "./shoppingCart.js" //Hoisting -> AST (abstract Syntax Tree)

console.log('Modulo que importa (Importa dependencias)')

console.log(funcAddToCart)
funcAddToCart('shampoo', 5) */

/* import { cart, addToCart } from './shoppingCart.js';
console.log(cart)
console.log(addToCart)

addToCart('shampoo', 5)
addToCart('acondicionador', 1)
console.log(cart) */

//Renombramiento de imports
/* import { cart as carrito, addToCart as agregarACarrito } from './shoppingCart.js';

agregarACarrito('shampoo', 5)
agregarACarrito('acondicionador', 1)
console.log(carrito) */

/* 
* import { carrito, agregarACarrito } from './shoppingCart.js';

agregarACarrito('shampoo', 5)
agregarACarrito('acondicionador', 1)
console.log(carrito) */

/* import * as shoppingCart from './shoppingCart.js'
console.log(shoppingCart)
shoppingCart.agregarACarrito('shampoo', 5)
console.log(shoppingCart.carrito)
console.log(shoppingCart.minItems) */


import { agregarACarrito, carrito, minItems } from "./shoppingCart.js" 

agregarACarrito('shampoo', 5)
console.log(carrito)
console.log(minItems) 

const student = {
  firstName: 'Yaxche',
  lastName: 'Manrique',
  job: 'Sensei'
}

const {firstName, lastName, job} = student;
console.log(firstName, lastName, job)