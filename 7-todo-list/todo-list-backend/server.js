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

app.get('/tasks/:id', (req, res)=> {
  // console.log(req.params)
  const taskId = req.params.id;
  // console.log(taskId)
  let selectedTask = tasks.find((task) => task.id == taskId);
  if(!selectedTask) {
    res.statusCode = 404;
    res.send(`El ID: ${taskId} no está en la base de datos`)
  }

  console.log(selectedTask)
  res.send(selectedTask)
})

app.listen(PORT, () => {
  console.log(`App escuchando en el puerto: ${PORT}`)
})

