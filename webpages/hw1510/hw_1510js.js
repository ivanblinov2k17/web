const $input = document.querySelector('input')
const $todos = document.querySelector('#todos-container')
if (!localStorage.getItem('db'))
{
    localStorage.setItem('db',JSON.stringify([' ']))
}
const todos = JSON.parse(localStorage.getItem('db'))
function makeTodo (text, id) {
    const todo = document.createElement('div')

    todo.classList.add('todo')
    todo.textContent = text 
    todo.id = id
    todo.appendChild(makeButton(text, id))
    return todo
}
function makeButton (text, id) {
    const button_del = document.createElement('input')
    button_del.type = 'button'
    button_del.classList.add('button_del')
    button_del.onclick = function(){
        console.log('robit', id)
    }
    button_del.id = id
    console.log('ryjgrf')
    return button_del
}
function delTodo (id){
    let elem = document.todos.children[id-1]
    elem.remove()
    console.log('robit', id)
}
function renderAll () {
    for (i=0;i<todos.length;i++){
        if (todos[i]!=' ')
        {
            $todos.appendChild(
                makeTodo(todos[i], i),
            )
        }
    }
}
$input.addEventListener('keyup', function(event) {
    if (event.code === 'Enter' && $input.value.trim()) {
        const text = $input.value
        todos.push(text)
        localStorage.setItem('db',JSON.stringify(todos))
        console.log(JSON.parse(localStorage.getItem('db')))
        $todos.appendChild(
            makeTodo(text, todos.length-1)
        )
        $input.value = ''
    }
})

renderAll()