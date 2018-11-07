const $input = document.querySelector('input')
const $todos = document.querySelector('#todos-container')
//localStorage.clear()
if (!localStorage.getItem('db')||localStorage.getItem('db')===`[["a0"," "]]`)
{
    localStorage.setItem('db',JSON.stringify([['a0',' ']]))
    localStorage.setItem('globalID',0)
}
const todos = JSON.parse(localStorage.getItem('db'))
function makeTodo (text, id) {
    const todo = document.createElement('div')

    todo.classList.add('todo')
    todo.textContent = text 
    todo.id = id
    todo.appendChild(makeButton(id))
    return todo
}
function makeButton ( id) {
    const button_del = document.createElement('input')
    button_del.type = 'button'
    button_del.classList.add('button_del')
    button_del.onclick = function(){
        delTodo(id)
    }
    return button_del
}
function delTodo (id){
    let elem = document.querySelector(`#${id}`)
    let temp = Infinity
    for (i=1;i<todos.length;i++){
        if (todos[i][0]==id){
            temp = i
        }
    }
    todos.splice(temp, 1)
    localStorage.setItem('db',JSON.stringify(todos))
    elem.parentNode.removeChild(elem)
}
function renderAll () {
    for (i=0;i<todos.length;i++){
        if (todos[i][1]!=' ')
        {
            $todos.appendChild(
                makeTodo(todos[i][1], todos[i][0]),
            )
        }
    }
}
$input.addEventListener('keyup', function(event) {
    if (event.code === 'Enter' && $input.value.trim()) {
        const text = $input.value
        localStorage.setItem('globalID', 1 + Number( localStorage.getItem('globalID')))
        todos.push(['a'+localStorage.getItem('globalID'),text])
        localStorage.setItem('db',JSON.stringify(todos))
        $todos.appendChild(
            makeTodo(text, 'a'+localStorage.getItem('globalID'))
        )
        $input.value = ''
    }
})
renderAll()