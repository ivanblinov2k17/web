const $input = document.querySelector('input')
const $todos = document.querySelector('#todos-container')
if (!localStorage.getItem('db'))
{
    localStorage.setItem('db',JSON.stringify([' ']))
}
const todos = JSON.parse(localStorage.getItem('db'))
function makeTodo (text) {
    const todo = document.createElement('div')

    todo.classList.add('todo')
    todo.textContent = text

    return todo
}

function renderAll () {
    todos.forEach(function (text){
        if (text!=' ')
        {
            $todos.appendChild(
                makeTodo(text)
            )
        }
    })
}
$input.addEventListener('keyup', function(event) {
    if (event.code === 'Enter' && $input.value.trim()) {
        const text = $input.value
        todos.push(text)
        localStorage.setItem('db',JSON.stringify(todos))
        console.log(JSON.parse(localStorage.getItem('db')))
        $todos.appendChild(
            makeTodo(text)
        )
        $input.value = ''
    }
})

renderAll()