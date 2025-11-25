function addTodo() {
  let todo = document.getElementById("todoInput").value;
  console.log("todo is", todo);
  const todos = [
    {
      id: 1,
      todo: "Go to market",
      assignedTo: "Brother",
    },
    {
      id: 2,
      todo: "Pick sister from school",
      assignedTo: "Brother",
    },
    {
      id: 3,
      todo: "Wash clothes",
      assignedTo: "Brother",
    },
  ];
  todos.push({
    id: 4,
    todo: "Wash clothes",
    assignedTo: "Brother",
  });
  todos.push({
    id: 100,
    todo: todo,
    assignedTo: "Brother",
  });
  let content = todos.map((todo) => {
    return `<div>
    <span>${todo.id}</span>
    <span>${todo.todo}</span>
    <div>${todo.assignedTo}</div>
    </div>`;
  });
  console.log("content", content);
  document.getElementById("todos").innerHTML = content.join(" ");
}
