document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(task) {
        if (task.trim() === '') return;

        const todoItem = document.createElement('li');

        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(taskText);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    }
});
