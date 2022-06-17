const todoInput= document.querySelector(".todo-input");
const todoButton= document.querySelector(".todo-button");
const todoList= document.querySelector(".todo-list");
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteEdit)

function addTodo(event)
{
    event.preventDefault();
    if(todoInput.value===""){
        alert("Please Enter a Task!!")
    }
    else{
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    const editButton=document.createElement('button');
    editButton.innerHTML=  'Edit' ;
    editButton.classList.add("edit-btn");
    todoDiv.appendChild(editButton);
    const trashButton=document.createElement('button');
    trashButton.innerHTML='Delete';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value="";
    }
    if(    todoInput.value===""){
        todoButton.innerText='Save';
    }
}
    function deleteEdit(e)
    {
        console.log(e.target);
    const item=e.target;
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        todo.remove();
    }
    if(item.classList[0]==='edit-btn'){
        const tag=item.parentElement
        const todo= item.previousElementSibling;
        if(todoInput.value==''){
        tag.remove();
       
        todoInput.value = todo.innerText;
        todoButton.innerText='Update';
        }
        
        
    }
}
