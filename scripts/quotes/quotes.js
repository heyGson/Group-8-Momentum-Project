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

randQuotes();

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
