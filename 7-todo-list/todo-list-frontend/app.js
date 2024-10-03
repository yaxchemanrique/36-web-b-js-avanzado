const URL = 'http://localhost:3000/tasks';

const activeContainer =
  document.querySelector('#active-section .tasks-container');
const pendingContainer =
  document.querySelector('#pending-section .tasks-container');
const closedContainer =
  document.querySelector('#closed-section .tasks-container');


function renderTasks(arr) {
  activeContainer.innerHTML = ''
  pendingContainer.innerHTML = ''
  closedContainer.innerHTML = ''

  arr.forEach(tarea => {
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('id', tarea.id);
    taskContainer.setAttribute('class', 'task');
    taskContainer.innerHTML = (`
      <p>${tarea.task}</p>
      <button>Borrar</button>
    `);

    switch (tarea.status) {
      case 'active':
        activeContainer.appendChild(taskContainer)
        break;
      case 'pending':
        pendingContainer.appendChild(taskContainer);
        break;
      case 'closed':
        closedContainer.appendChild(taskContainer);
        break;
    }
    // localhost:3000/tasks/:id
    const taskButton = taskContainer.querySelector('button');
    taskButton.addEventListener('click', () => {
      const taskToDeleteId = taskContainer.id;
      deleteTask(taskToDeleteId);
    });

  })
}

async function deleteTask(id) {
  const url = `${URL}/${id}`
  const deleteConfig = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const response = await fetch(url, deleteConfig);
  getTasks()
}

async function getTasks() {
  const response = await fetch(URL);
  const tasks = await response.json();
  console.log(tasks);

  renderTasks(tasks)
}

getTasks()

const form = document.querySelector('form');
const taskName = form.querySelector('#taskName')
const radiosNL = form.querySelectorAll('input[name="status"]');
const radios = [...radiosNL];

async function sendTask(obj) {
  const reqBody = {
    id: `${obj.task}-${Math.random()}`,
    task: obj.task,
    status: obj.status
  }

  const PostConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqBody)
  }

  const response = await fetch(URL, PostConfig);
  // if(!response.ok) {
  //   renderError()
  // }

  getTasks()
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskNameValue = taskName.value
  const selectedRadio = radios.find((radio) => radio.checked === true);
  const selectedRadioValue = selectedRadio.id

  const body = {
    task: taskNameValue,
    status: selectedRadioValue
  };

  sendTask(body)
})