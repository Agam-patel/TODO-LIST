const todoform=document.querySelector(".form-todo")
const todoinput=document.querySelector(".form-todo input[type='text']")
const todolist=document.querySelector(".todo-list");
console.log(todoinput)
todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newtodoitem=todoinput.value;
    const newli=document.createElement("li");
    const newliin=`<span class="text">${newtodoitem}</span>
    <div class="todo-buttons">

        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">
            Remove
        </button>
    </div>`;
    newli.innerHTML=newliin;
    todolist.append(newli);

    todoinput.value="";


})
todolist.addEventListener("click",(e)=>{
    if( e.target.classList.contains("done")){
        const lispan=e.target.parentNode.previousElementSibling;
        console.log(lispan);
        lispan.style.textDecoration="line-through"
        console.log("great");
    }
    if( e.target.classList.contains("remove")){
        const tali=e.target.parentNode.parentNode;
        tali.remove();
        console.log("you want remove som")
    }
})