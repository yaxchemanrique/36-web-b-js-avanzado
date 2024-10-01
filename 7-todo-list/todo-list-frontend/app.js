const URL = 'http://localhost:3000/tasks';

const activeContainer =
  document.querySelector('#active-section .tasks-container');
const pendingContainer =
  document.querySelector('#pending-section .tasks-container');
const closedContainer =
  document.querySelector('#closed-section .tasks-container');

function renderTasks(arr) {
  arr.forEach(tarea => {
    const taskContainer = document.createElement('div');
    taskContainer.innerHTML = `<p>${tarea.task}</p>`;

    switch (tarea.status) {
      case 'active':
        activeContainer.appendChild(taskContainer)
        break;
      case 'pending':
        pendingContainer.appendChild(taskContainer);
        break;
      case 'done':
        closedContainer.appendChild(taskContainer);
        break;
    }
  })
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
  const PostConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: Math.random(),
      task: obj.task,
      status: obj.status
    })
  }
  const response = await fetch(URL, PostConfig);
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