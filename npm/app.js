const pc = require('picocolors');
const size = 20;
// console.log(`${pc.green("hola!")}`)
function clg() {
  console.log(`${pc.greenBright("Conversión Completa!")}\nTu archivo ${pc.yellow("JSON")} esta en ${pc.blue("./example.csv")}\nY pesa ${size > 50 ? pc.red(size) : pc.green(size)} bytes`);

  console.log('hola!')
}

clg()