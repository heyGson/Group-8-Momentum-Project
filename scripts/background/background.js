// Function for random background image everytime the page load.

const imgs = [];

imgs[1] = "images/01.jpg";
imgs[2] = "images/02.jpg";
imgs[3] = "images/03.jpg";
imgs[4] = "images/04.jpg";
imgs[5] = "images/05.jpg";
imgs[6] = "images/06.jpg";
imgs[7] = "images/07.jpg";
imgs[8] = "images/08.jpg";
imgs[0] = "images/09.jpg";

window.onload = function () {
  const randomImgs = Math.floor(Math.random() * imgs.length);

  document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 100%), url(${imgs[randomImgs]})`;
};
