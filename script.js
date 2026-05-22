let todo =[]//empty array
let completed=0;
function getvalue(){
    let value= document.getElementById("todoInput").value;// box bata value lera ako
    console.log(value);
    const newtodo ={
        id: Math.floor(Math.random()*1000),
        text: value,
        completed: false,
    
    };
    todo.push(newtodo);

    let messages= document.getElementById("todos"); //pront garana ho k
    console.log(messages);

    // todo.push(value);// click vayesi array ma add

    const todoList = todo.map((todo) => `<li>${todo.text}</li> <input type="checkbox" onchange="check(this)">Completed`).join("");

    messages.innerHTML = todoList;
    document.getElementById("total").innerHTML = todo.length;
}
    
function check(element){
    console.log(element);
  if (element.checked){
        completed=completed+1;
        document.getElementById("completed").innerHTML = completed;
    }else {
    completed=completed-1;
        document.getElementById("completed").innerHTML = completed;
 
console.log(element.checked);
}
}
