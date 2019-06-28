var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'fazer café'
    ];

function renderTodos(){
    listElement.innerHTML - '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextnode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    
    }
}

renderTodos();
function addTodos(){
    var todoText = inputElement.nodeValue;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;