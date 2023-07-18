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
