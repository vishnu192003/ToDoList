const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');

// Add a new task
addBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskTextSpan = document.createElement('span');
        taskTextSpan.classList.add('task-text');
        taskTextSpan.textContent = taskText;
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextSpan);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});

// Add task on Enter key press
taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});