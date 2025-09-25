// app.js

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoContainer = document.getElementById("todoContainer");

let todoArray = [];
fetch("https://localhost:5555/todos")
.then((response) => response.json())
.then((data) => {
    todoArray = data 
    showAllTodos(todoArray); 
})

todoForm.addEventListener("submit", function (e) {
  e.preventDefault(); // fixed typo

  const value = getInputValue();
  if (!value.trim()) return;

  const newTodo = {
    id: Math.floor(Math.random() * 10000), // fixed random function
    title: value,
  };

  todoArray.push(newTodo);
  showAllTodos(todoArray);
  todoInput.value = "";
});

function getInputValue() {
  return todoInput.value; // fixed typo
}

function showAllTodos(todos) {
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

function addTodo(todo) {
  const li = document.createElement("li");
  li.innerHTML = `
    <div>
      <input type="checkbox" id="checkbox-${todo.id}">
      <h1>${todo.title}</h1>
      <div>
        <button class='delete'>🗑️</button>
        <button class='edit'>✏️</button>
      </div>
    </div>
  `;

  // 🗑️ Delete functionality
  li.querySelector(".delete").addEventListener("click", () => {
    todoArray = todoArray.filter((t) => t.id !== todo.id);
    showAllTodos(todoArray);
  });

  todoContainer.appendChild(li);
}