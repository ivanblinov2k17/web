const $input = document.querySelector('input')
const $todos = document.querySelector('#todos-container')

const todos = [
    'Finish my hw',
    'Do nothing'
]

function makeTodo (text) {
    const todo = document.createElement('div')

    todo.classList.add('todo')
    todo.textContent = text

    return todo
}

function renderAll () {
    todos.forEach(function (text){
        $todos.appendChild(
            makeTodo(text)
        )
    })
}
$input.addEventListener('keyup', function(event) {
    if (event.code === 'Enter' && $input.value.trim()) {
        const text = $input.value

        todos.push(text)

        $todos.appendChild(
            makeTodo(text)
        )
        $input.value = ''
    }
})

renderAll()