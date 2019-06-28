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

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkTest = document.createTextNode('excluir');
        linkElement.appendChild(linkTest);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
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