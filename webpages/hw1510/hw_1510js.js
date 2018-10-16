const $input = document.querySelector('input')
const $todos = document.querySelector('#todos-container')

$input.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
        const todo = document.createElement('div')
        todo.classList.add('todo')
        todo.textContent = $input.value
        $todos.appendChild(todo)
    }
})