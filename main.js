//selectors
const todoInput = document.querySelector('.input');
const todoButton = document.querySelector('.btn');
const todoList = document.querySelector('.list');
const filterOption = document.querySelector('.filter');
//The querySelector() method only returns the first element that matches the specified selectors
//event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

//functions
function addTodo(event){    
    event.preventDefault() //method cancels the event if it is cancelable
    //todo div
    const todoDiv = document.createElement('div'); 
    todoDiv.classList.add('todo');  
    //create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;  
    newTodo.classList.add('todo-item'); 
    todoDiv.appendChild(newTodo);

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'; 
    completedButton.classList.add("complete-btn"); 
    todoDiv.appendChild(completedButton);  
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv); 
    todoInput.value = ""; 
}

function deleteCheck(e){
    const item = e.target; //get the element which was triggered
    //delete todo
    if(item.classList[0] === "trash-btn"){ 
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");  
        todo.addEventListener('transitionend',function(){
            todo.remove();  //this function will be executed(todo will be deleted) only after the end of animation. 
        });
        
    }  

    //check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}
function filterTodo(e){
    const todos = todoList.childNodes;  
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "not_completed":
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";
                }
                break;
        }
    });
}