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
  //enviar img -> DB
  // Recuperar la url
  const newUser = {
    firstName: req.body.firstName,
    url: 'https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  };
  users.push(newUser)
  console.log(req.body)
  console.log(users)

  res.redirect(`users/${users.length - 1}`)
})

// *c/users/5
router.get('/:id', (req, res) => {
  // res.send(`Esta es la informacion del usuarion con el ID de: ${req.params.id}`)
  // res.send(`Esta es la informacion del usuario: ${users[req.params.id].firstName}`)
  const id = req.params.id;
  const userData= {
    firstName: users[id].firstName,
    profilePicUrl: users[id].url
  }

  res.render('users/userProfile', userData)
})




/* // * /users/perfil
app.get('/perfil') */

// app.get('/users/7')

module.exports = router;