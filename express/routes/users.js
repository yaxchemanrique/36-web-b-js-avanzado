const express = require('express');
const router = express.Router();

// * /users/......

// * /users /
router.get('/', (req, res) => {
  res.send('Página con la lista de usuarios')
})

// * /users /new
router.get('/new', (req, res) => {
  res.render('users/new')
})

const users = []

router.post('/', (req, res) => {

  users.push({firstName: req.body.firstName})
  console.log(req.body)
  console.log(users)
  res.redirect(`users/${users.length - 1}`)
})

// *c/users/5
router.get('/:id', (req, res) => {
  // res.send(`Esta es la informacion del usuarion con el ID de: ${req.params.id}`)
  res.send(`Esta es la informacion del usuario: ${users[req.params.id].firstName}`)
})




/* // * /users/perfil
app.get('/perfil') */

// app.get('/users/7')

module.exports = router;