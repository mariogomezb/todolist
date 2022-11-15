const todoForm = document.getElementById("todoForm");
const total = document.getElementById("total");
const completes = document.getElementById("completes");
const todoUl = document.getElementById("todos");
const todoInput = document.getElementById("todoInput");

let todoList = [
    {
        id: 1,
        name: "Estudiar javascript",
        completed: false,
    },
    {
        id: 2,
        name: "Estudiar javascript",
        completed: false,
    },
    {
        id: 3,
        name: "Estudiar javascript",
        completed: false,
    },
];

let todoId = todoList.length

const render = () => {
  let list = ""
  completedTotal = 0
  todoList.forEach(item => { 
    let status = ""
    if(item.completed){
      status = "checked"
      completedTotal++
    }
    let template = `<li class="todo">${item.id} ${item.name} <input ${status} type="checkbox" data-update="${item.id}"></li><button data-delete="${item.id}">❌</button>`
    list += template
  });
  todoUl.innerHTML = list
  total.textContent = todoList.length
  completes.textContent = completedTotal
  console.log(todoList)
}

render()

const addTodos = () => {
  if(!todoInput.value == "")
  {todoId++
  let newTodo = {
    id: todoId,
    name: todoInput.value,
    completed : false
  }
  todoList.push(newTodo)
  render()} else {
    alert("Debes escribir un todo!!!")
  }
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault()
  addTodos()
})

todoUl.addEventListener("click", (e) => {
  deleteTodos(e)
  updateTodos(e)
})

const deleteTodos = (e) => {
  if(e.target.dataset.delete){
    const id = e.target.dataset.delete
    const index = todoList.findIndex((item) => item.id == id)
    todoList.splice(index,1)
    render()
  }
}

const updateTodos = (e) =>{
  if(e.target.dataset.update){
    const id = e.target.dataset.update
    const index = todoList.findIndex((item) => item.id == id)
    todoList[index].completed = !todoList[index].completed
    render()
  }
}



