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