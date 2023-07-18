function randomIntFromInterval(min, max) {
  //random number generator
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function hasValue(input) {
  //Function for checking if input contains a value
  if (input.value == "" || input.value == null) {
    return false;
  } else {
    return true;
  }
}

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
