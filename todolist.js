const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `<span>${taskText}</span>
                  <button class="deleteButton">Delete</button>`;

  taskList.appendChild(li);
  taskInput.value = '';

  const deleteButton = li.querySelector('.deleteButton');
  deleteButton.addEventListener('click', removeTask);
}

function removeTask(event) {
  const button = event.target;
  const listItem = button.parentElement;
  listItem.remove();
}
