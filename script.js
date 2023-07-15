// FUNCTIONS
//testing
//ajhksdgfjkhsadf
function hour() {
  //Function for displaying hours
  let date = new Date();
  let hr = date.getHours();

  if (hr < 10) {
    hr = "0" + hr;
  }

  clock = hr;

  document.getElementById("hour").innerText = clock;

  let t = setTimeout(function () {
    hour();
  }, 1000);
}

function minute() {
  //Function for displaying minutes
  let date = new Date();
  let min = date.getMinutes();

  if (min < 10) {
    min = "0" + min;
  }

  clock = min;

  document.getElementById("minute").innerText = clock;

  let t = setTimeout(function () {
    minute();
  }, 1000);
}

function daydate() {
  //Function for displaying day and date
  const weekday = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let wkdate = new Date();
  let year = wkdate.getFullYear();
  let month = wkdate.getMonth();
  let numday = wkdate.getDate();
  let day = wkdate.getDay();

  dates =
    weekday[day] +
    " | " +
    months[month].toLowerCase() +
    " " +
    numday +
    " " +
    year;

  document.getElementById("wkdate").innerText = dates;
}

function greeting() {
  //Function for displaying greeting message along with user's name as well as making it editable and stored on local storage.
  let date = new Date();
  let hrs = date.getHours();
  let greets = document.getElementById("greeting");
  let name = window.localStorage.username;

  let iname = document.createElement("input");
  iname.type = "text";
  iname.id = "changename";
  iname.value = name;
  iname.autocomplete = "off";

  let namesub = document.createElement("input");
  namesub.type = "submit";
  namesub.id = "namesub";
  namesub.hidden = true;

  if (hrs == 12) {
    ampm = "noon";
  } else if (hrs < 12) {
    ampm = "morning";
  } else if (hrs > 12 && hrs < 18) {
    ampm = "afternoon";
  } else if (hrs > 17) {
    ampm = "evening";
  }

  let greet = "Good " + ampm + ", ";

  greets.innerText = greet;

  greets.appendChild(iname);
  greets.appendChild(namesub);

  let gname = document.getElementById("changename");
  gname.style.width = gname.value.length + 0.5 + "ch";

  let gg = document.getElementById("greeting");

  gg.addEventListener("submit", function (evt) {
    evt.preventDefault();

    if (hasValue(gg.elements["changename"])) {
      usertext = gg.elements["changename"].value;
      window.localStorage.setItem("username", usertext);
    } else {
    }

    gg.elements["changename"].blur();
  });

  gname.addEventListener("input", function () {
    gname.style.width = gname.value.length * 1.1 + "ch";
  });
}

function hasValue(input) {
  //Function for checking if input contains a value
  if (input.value == "" || input.value == null) {
    return false;
  } else {
    return true;
  }
}

function randomIntFromInterval(min, max) {
  //random number generator
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randQuotes() {
  //display quotes randomly

  window.addEventListener("load", function () {
    let randnum = randomIntFromInterval(1, quotes.length - 1);
    let q = quotes[randnum].quote;
    let a = quotes[randnum].author;

    document.getElementById("quotetxt").innerHTML = '"' + q + '"';
    document.getElementById("qauthor").innerHTML = a;
  });
}

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

function storeQuotes(idxname, idx) {
  //store quotes to localstorage
  window.localStorage.setItem(idxname, JSON.stringify(idx));
}

function loadQuotes(idxname) {
  //immediately update quotes dictionary using the locally stored quotes when loading the page
  window.addEventListener("load", function () {
    quotes = JSON.parse(window.localStorage.getItem(idxname));
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

// VARIABLES

const focusForm = document.getElementById("f-frm");
const userForm = document.getElementById("un-form");
const unError = document.getElementById("un-error");
const inputname = document.querySelector("#nameinput");
const mainpage = document.querySelector("main");
const focuscont = document.getElementById("focuscont");
const focuslist = document.getElementById("focuslist");
const fmenu = document.getElementById("fmenu");
const flist = document.getElementById("f-list");
const todoform = document.getElementById("todoform");
let listdivs = document.getElementById("listdivs");
let quotetxt = document.getElementById("quotetxt");
let tclear = document.querySelectorAll(".todoclear");

let quotes = [
  {
    number: 1,
    quote:
      "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    author: "Neil Gaiman",
  },
  {
    number: 2,
    quote:
      "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    author: "Helen Keller",
  },
  {
    number: 3,
    quote:
      "Things may come to those who wait, but only the things left by those who hustle.",
    author: "Abraham Lincoln",
  },
  {
    number: 4,
    quote:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank",
  },
  {
    number: 5,
    quote:
      "Some people want it to happen, some wish it would happen, others make it happen.",
    author: "Michael Jordan",
  },
];

if (window.localStorage.username == null) {
  //checks if the username key in localstorage is populated and displays elements accordingly
  inputname.style.display = "flex";
  inputname.style.opacity = "1";
} else {
  mainpage.style.display = "flex";
  mainpage.style.opacity = "1";
}

if (window.localStorage.focus == null) {
  //checks if the focus key in localstorage is populated and displays elements accordingly
  focuscont.style.display = "flex";
  focuscont.style.opacity = "1";
} else {
  focuslist.style.display = "flex";
  focuslist.style.opacity = "1";
}
if (window.localStorage.focus == null) {
  //when changing the focus, places the current focus on the input bar
} else {
  let focus = window.localStorage.focus;
  document.getElementById("listtxt").innerText = focus;
}

flist.elements["focusbox"].addEventListener("change", function () {
  // event listener for the focus, strike-through text
  if (this.checked) {
    document.getElementById("listtxt").style.textDecoration = "line-through";
  } else {
    document.getElementById("listtxt").style.textDecoration = "none";
  }
});

fmenu.addEventListener("click", function () {
  // event listener for clicking on the menu button to change the focus
  let t = setTimeout(function () {
    focuslist.style.display = "none";
  }, 300);
  focuslist.style.opacity = "0";
  let i = setTimeout(function () {
    focuscont.style.display = "flex";
  }, 299);
  let m = setTimeout(function () {
    focuscont.style.opacity = "1";
  }, 600);

  if (flist.elements["focusbox"].checked) {
    //removes the finished focus from local storage when changing
    localStorage.removeItem("focus");
    focusForm.elements["focustxtform"].value = "";
  } else {
    focusForm.elements["focustxtform"].value = window.localStorage.focus;
  }
});

focusForm.addEventListener("submit", function (evt) {
  //event listener for focus text input
  evt.preventDefault();

  if (hasValue(focusForm.elements["focustxtform"])) {
    ftxt = focusForm.elements["focustxtform"].value;
    window.localStorage.setItem("focus", ftxt);
  } else {
  }

  if (window.localStorage.focus == null) {
  } else {
    let t = setTimeout(function () {
      focuscont.style.display = "none";
    }, 300);
    focuscont.style.opacity = "0";
    let i = setTimeout(function () {
      focuslist.style.display = "flex";
    }, 299);
    let m = setTimeout(function () {
      focuslist.style.opacity = "1";
    }, 600);
  }

  if (window.localStorage.focus == null) {
  } else {
    let focus = window.localStorage.focus;
    document.getElementById("listtxt").innerText = focus;
  }

  if (flist.elements["focusbox"].checked) {
    flist.elements["focusbox"].click();
  } else {
  }
});

userForm.addEventListener("submit", function (evt) {
  //event listener for username input
  evt.preventDefault();

  if (hasValue(userForm.elements["username"])) {
    usertext = userForm.elements["username"].value;
    window.localStorage.setItem("username", usertext);
    greeting();
  } else {
    unError.style.opacity = "1";
  }

  if (window.localStorage.username == null) {
  } else {
    let t = setTimeout(function () {
      inputname.style.display = "none";
    }, 300);
    inputname.style.opacity = "0";
    let i = setTimeout(function () {
      mainpage.style.display = "flex";
    }, 300);
    let m = setTimeout(function () {
      mainpage.style.opacity = "1";
    }, 600);
  }
});

userForm.addEventListener("input", function () {
  //event listener for error fade out
  unError.style.opacity = "0";
});

let addquote = document.getElementById("addquote");
let qauthor = document.getElementById("qauthor");
let qtinput = document.getElementById("qt-input");
let qainput = document.getElementById("qa-input");
let aqinput = document.getElementById("aq-input");
let aqform = document.getElementById("aq-form");
let qerror = document.getElementById("qerror");

addquote.addEventListener("click", function () {
  //event listener
  let t = setTimeout(function () {
    qauthor.style.display = "none";
  }, 300);
  let i = setTimeout(function () {
    quotetxt.style.display = "none";
  }, 300);
  let ii = setTimeout(function () {
    addquote.style.display = "none";
  }, 300);
  qauthor.style.opacity = "0";
  quotetxt.style.opacity = "0";
  addquote.style.opacity = "0";
  let m = setTimeout(function () {
    qtinput.style.display = "block";
  }, 299);
  let mm = setTimeout(function () {
    qainput.style.display = "block";
  }, 299);
  let mmm = setTimeout(function () {
    aqinput.style.display = "block";
  }, 299);
  let e = setTimeout(function () {
    qtinput.style.opacity = "1";
  }, 600);
  let ee = setTimeout(function () {
    qainput.style.opacity = "1";
  }, 600);
  let eee = setTimeout(function () {
    aqinput.style.opacity = "1";
  }, 600);
  qtinput.value = "";
  qainput.value = "";
});

aqinput.addEventListener("click", function () {
  let t = setTimeout(function () {
    qtinput.style.display = "none";
  }, 300);
  let i = setTimeout(function () {
    qainput.style.display = "none";
  }, 300);
  let ii = setTimeout(function () {
    aqinput.style.display = "none";
  }, 300);
  qtinput.style.opacity = "0";
  qainput.style.opacity = "0";
  aqinput.style.opacity = "0";
  let m = setTimeout(function () {
    qauthor.style.display = "block";
  }, 299);
  let mm = setTimeout(function () {
    quotetxt.style.display = "block";
  }, 299);
  let mmm = setTimeout(function () {
    addquote.style.display = "block";
  }, 299);
  let e = setTimeout(function () {
    qauthor.style.opacity = "";
  }, 600);
  let ee = setTimeout(function () {
    quotetxt.style.opacity = "1";
  }, 600);
  let eee = setTimeout(function () {
    addquote.style.opacity = "";
  }, 600);
});

aqform.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (
    hasValue(aqform.elements["qt-input"]) &&
    hasValue(aqform.elements["qa-input"])
  ) {
    quotes.push({
      number: quotes.length + 1,
      quote: aqform.elements["qt-input"].value,
      author: aqform.elements["qa-input"].value,
    });

    qauthor.innerHTML = aqform.elements["qa-input"].value;
    quotetxt.innerHTML = '"' + aqform.elements["qt-input"].value + '"';

    storeQuotes("quotes", quotes);

    let t = setTimeout(function () {
      qtinput.style.display = "none";
    }, 300);
    let i = setTimeout(function () {
      qainput.style.display = "none";
    }, 300);
    let ii = setTimeout(function () {
      aqinput.style.display = "none";
    }, 300);
    qtinput.style.opacity = "0";
    qainput.style.opacity = "0";
    aqinput.style.opacity = "0";
    let m = setTimeout(function () {
      qauthor.style.display = "block";
    }, 299);
    let mm = setTimeout(function () {
      quotetxt.style.display = "block";
    }, 299);
    let mmm = setTimeout(function () {
      addquote.style.display = "block";
    }, 299);
    let e = setTimeout(function () {
      qauthor.style.opacity = "";
    }, 600);
    let ee = setTimeout(function () {
      quotetxt.style.opacity = "1";
    }, 600);
    let eee = setTimeout(function () {
      addquote.style.opacity = "";
    }, 600);
  } else if (
    hasValue(aqform.elements["qt-input"]) == false &&
    hasValue(aqform.elements["qa-input"]) == false
  ) {
    qerror.innerHTML = "Please enter a quote and an author.";
    qerror.style.opacity = "1";
  } else if (
    hasValue(aqform.elements["qt-input"]) &&
    hasValue(aqform.elements["qa-input"]) == false
  ) {
    qerror.innerHTML = "Please enter the author's name.";
    qerror.style.opacity = "1";
  } else {
    qerror.innerHTML = "Please enter a quote by the author.";
    qerror.style.opacity = "1";
  }
});

window.addEventListener("load", function () {
  greeting();
});

aqform.addEventListener("input", function () {
  qerror.style.opacity = "0";
});

if (window.localStorage.quotes != null) {
  loadQuotes("quotes");
}

let arraytodo = [];

if (window.localStorage.todo != null) {
  loadTodo("todo");
  popTodo();
}

hour();
minute();
daydate();
randQuotes();
addTodo();
