let todo =[]//empty array
function getvalue(){
    let value= document.getElementById("todoInput").value;// box bata value lera ako
    console.log(value);

    let messages= document.getElementById("todos"); //pront garana ho k
    console.log(messages);

    todo.push(value);// click vayesi array ma add

    const todoList = todo.map((todo) => `<li>${todo}</li>`).join(""); // line by line garauna ko lagi.ani join chai comma hatauna rakheko
    messages.innerHTML = todoList;
    todo.length;
}
