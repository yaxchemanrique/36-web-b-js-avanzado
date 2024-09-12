/* 
firstName, lastName, job, email,
yaxche, manrique, sensei, yaxche@MediaList.com,
diego, melendez, estudiante, diego@MediaList.com, 
*/

const fs = require('node:fs') //file system
// const {existsSync} = require('node:fs')
const readLine = require('node:readline') // leer por lineas los archivos
const path = require('node:path') // crear y leer paths

/* if (fs.existsSync('./json-examplehjbshavbdhasv.json')) {
  console.log('Sí existe!'); 
  process.exit(0); //correcto
} else {
  console.log('El archivo ./json-examplehjbshavbdhasv.jso no existe');
  process.exit(1); //por ahi hubo un error
} */

/* function x(params) {
  //body de la funcion
  return 'hola';
  //Unreachable code
} */

const inputFilePath = process.argv[2];

/* if(inputFilePath)
if(inputFilePath !== undefined, NaN, 0, '') { //falsy
  jksbhdsbahbha
}

if(!inputFilePath)
if(inputFilePath === undefined, NaN, 0, '') {
  // regresame un error! Algo salio mal!
} */

if (!inputFilePath) {
  console.error('⚠️ USO: node ./csv-to-json.js path-del-archivo-csv.csv');
  process.exit(1);
}

if (!fs.existsSync(inputFilePath)) {
  console.error(`El archivo ${inputFilePath} no existe`);
  process.exit(1);
}

const readStream = fs.createReadStream(inputFilePath);
const rl = readLine.createInterface({
  input: readStream,
  output: process.stdout,
  terminal: false,
})
//                                (example-csv.csv         .csv ) + .json
//                                (example-csv) + .json
//                                example-csv.json
const outputFilePath = path.basename(inputFilePath, path.extname(inputFilePath)) + '.json'
// console.log(path.basename(inputFilePath))
// console.log(path.basename(inputFilePath, path.extname(inputFilePath)))
// console.log(outputFilePath)

/* 
* variable rl
* rl.on('line') --> ejecutar cuando empiece a leer
* rl.on('close') --> al terminar de leer una linea
* rl.on('SIGINT') --> ctrl + c
*/

let headers = [];
const jsonArray = [];

rl.on('line', (line) => {
  // console.log(`empecé a leer una linea: ${line}`)
  const values = line.split(',');

  if (headers.length === 0) {
    headers = values;
  } else {
    const jsonObj = {};
    headers.forEach((header, index) => {
      // console.log(header)
      jsonObj[header] = values[index];
      // jsonObj.header = values[index];
    })
    // console.log(jsonObj)
    jsonArray.push(jsonObj)
  }
})


rl.on('close', () => {
  fs.writeFileSync(outputFilePath, JSON.stringify(jsonArray, null, 2));
  fs.stat(outputFilePath, (err, stat) => {
    console.log(`Conversión Completa!\nTu archivo JSON esta en ${outputFilePath}\nY pesa ${stat.size} bytes`);
  })
})




