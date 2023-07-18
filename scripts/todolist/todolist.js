function popOut() {
  //function for toggling popup todolist by toggling the class .show
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function innerTodo(item, itemvalue) {
  if (hasValue(item)) {
    ftxt = itemvalue;
    const tododiv = document.createElement("div");

    const todo = document.createElement("input");
    todo.type = "checkbox";
    todo.id = "todocheck";

    const todoclear = document.createElement("div");
    todoclear.className = "todoclear";
    todoclear.innerHTML = "🗑";

    const todolabel = document.createElement("label");

    const todospan = document.createElement("span");
    todospan.innerHTML = ftxt;

    tododiv.appendChild(todo);
    todolabel.appendChild(todospan);
    tododiv.appendChild(todolabel);
    tododiv.appendChild(todoclear);

    listdivs.appendChild(tododiv);
    todoform.elements["todoinput"].value = "";
  }

  tclear = document.querySelectorAll(".todoclear"); //for clearing the entries
  for (let el of tclear) {
    el.addEventListener("click", function () {
      let par = el.parentElement;

      par.remove();
    });
  }
}

function addTodo() {
  //function for the todo list
  todoform.addEventListener("submit", function (evt) {
    evt.preventDefault();
    innerTodo(
      todoform.elements["todoinput"],
      todoform.elements["todoinput"].value
    );
    arraytodo.push(ftxt);
    storeQuotes("todo", arraytodo);
  });
}

function loadTodo(idxname) {
  window.addEventListener("load", function () {
    arraytodo = JSON.parse(window.localStorage.getItem(idxname));
  });
}

function popTodo() {
  for (let i = 0; i < arraytodo.length; i++) {
    innerTodo(
      document.getElementById("greeting").elements["changename"],
      arraytodo[i]
    );
  }
}

addTodo();

let arraytodo = [];

if (window.localStorage.todo != null) {
  loadTodo("todo");
  popTodo();
}
