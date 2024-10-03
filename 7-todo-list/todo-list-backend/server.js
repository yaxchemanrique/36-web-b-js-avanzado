const express = require('express');
const cors = require('cors');
const DB_TASKS = require('./tasks.js');
const PORT = 3000;

// spread operator
const tasks = [...DB_TASKS];

const app = express();
app.use(express.json());
app.use(cors());

app.get('/tasks', (req, res)=> {
  res.send(tasks);
})

//! localhost:3000/tasks/id
//app.get('/tasks/id')

//! localhost:3000/tasks/3
app.get('/tasks/:id', (req, res)=> {
  // console.log(req.params)
  const taskId = req.params.id; // taskId = 3
  // console.log(taskId)
  let selectedTask = tasks.find((task) => task.id == taskId);
  if(!selectedTask) {
    res.statusCode = 404; //Not Found
    res.send(`El ID: ${taskId} no está en la base de datos`)
  }
  console.log(selectedTask)
  res.send(selectedTask)
})

app.post('/tasks', (req, res)=> {
  const newTask = req.body; //Hacer validaciones, id?, task?, status? = active
  tasks.push(newTask);
  res.status(201).json(newTask);
  
  // ! En el front: fetch('hadhgadsj.com/v2/', {method: 'POST', body:{ task, id, }})
})

// app.put -> Reemplazar un elemento
/* app.put('/tasks/:id', (req, res)=> {
  const body = {
    id,
    task,
    status
  }
  // reemplazar la tarea con el ID id usando el body
}) */
//Modificar o actualizar un elemeto
  /* app.patch('/tasks/:id', (req, res)=> {
    const propToUpdate = {
      task
    }
    // modificar unicamente la propiedad task en el elemnto que tenga el ID id
  }) */

// app.patch

app.delete('/tasks/:id', (req, res)=> {
  const taskId = req.params.id;
  const taskToDelete = tasks.find((task) => task.id == taskId);
  if(!taskToDelete) {
    res.status(404);
    res.send(`La tarea con el ID: ${taskId} no fue encontrada`)
  }
  console.log(taskToDelete)
  const taskToDeleteId = tasks.indexOf(taskToDelete);
  tasks.splice(taskToDeleteId, 1);
  // console.log(tasks);
  res.status(202);
  res.send(taskToDelete);
  // tasks -> le vamos a borrar el elemento taskToDelete
  // res.stats(200).send('Elemnto borrado....')
})

// CRUD -> Create Read Update Delete
// API REST -> CRUD, pokeapi: pokeapi.com/v2/pikachu
/* {
name: pikachu,
sprite: '/img/pikachu'
tipo: electric
attacks: []


pokeapi.com/v2/bulbasaur
name: bulbasaur,
sprite: null
tipo: planta-veneno
attacks: [x, y, z]

}
*/

/* 
Object.keys(pokemon)
<h1>{pokemon.name}
<img src={pokemon?.sprite}/>
*/
 
app.listen(PORT, () => {
  console.log(`App escuchando en el puerto: ${PORT}`)
})

