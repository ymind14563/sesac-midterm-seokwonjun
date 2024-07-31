
document.addEventListener('DOMContentLoaded', () => {

    const resultBox = document.querySelector(`.result`);

    function getTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => {
            for (i = 0; i <= 10; i++){

            resultBox.innerHTML = 
            `<li>
            <input type="checkbox" id=${i}>${json[i].title}</input>
            <button onclick="deleteTodo()">X</button>
            </li>
            `

            }
        })
    }
})

let inputBox = document.getElementById('inputField');
let addTodo = document.getElementById('addToDo');


addTodo.addEventListener('click', function() {
let list = document.createElement('li');
if (!inputBox.value || inputBox.value === ' '){
    alert('내용을 입력해주세요.')
} else {

    
}
})

function deleteTodo(){
    document.querySelector()
}