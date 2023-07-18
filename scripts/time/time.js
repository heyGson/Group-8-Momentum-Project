function hour() {
  //Function for displaying hours
  let date = new Date();
  let hr = date.getHours();

  if (hr < 10) {
    hr = "0" + hr;
  }

  clock = hr;

  document.getElementById("hour").innerText = `${clock}:`;

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

hour();
minute();
daydate();
