const express = require('express');
const app = express();

/*
! verbos http: 
  * get -> obtener informacion www.google.com/
  * post -> enviar informacion
  * put -> users = [{}, {}, {2}]
  *   {
  *     nombre: 'Yaxche',
  *     email: 'yaxche@mail.com',
  *     numTelefono: 11-11-11-11
  *   } ->
  *   {
  *     nombre: 'Yaxche',
  *     email: 'yaxche@mail.com',
  *     numTelefono: 22-22-22-22
  *   } 
  * patch -> 
  *   {
  *     nombre: 'Yaxche',
  *     email: 'yaxche@mail.com',
  *     numTelefono: 11-11-11-11
  *   } ->
  *   {numTelefon: 22-22-22-22}
  * delete (3🚫)
*/

/* 
! Status codes

*/

// ejs, hbs, pug ... templates/ view engines
app.set('view engine', 'ejs')
app.use(express.urlencoded( {extended: true}))

app.get('/', (req, res) => { 
  console.log('Hola desde app.get');
  // res.sendStatus(200)
  // res.send('Hola?');
  // res.download("server.js")
  res.render('index', {firstName: 'Yaxche'});
})

const usersRouter = require('./routes/users.js');
app.use('/users', usersRouter);

app.listen(3000)