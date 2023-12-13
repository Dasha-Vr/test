const blockHide = document.querySelector(".blockHide");
const modalClose = document.querySelector(".modalClose");
const modalOverlay = document.querySelector(".modal-overlay");

const button1 = document.querySelector(".btn-warning");
const button2 = document.querySelector(".btn-success");
const blockOne = document.querySelector(".blockOne");
const itemTwo = document.querySelector(".itemTwo");


function blockToggle() {
  blockHide.classList.toggle("blockHide");
}

document.addEventListener("DOMContentLoaded", blockToggle);

modalClose.addEventListener("click", blockToggle);

modalOverlay.addEventListener("click", function (event) {
  if (!event.target.closest('.modal-window')) {
    blockToggle();
  }
});


button1.addEventListener("click", function () {
  blockOne.classList.toggle("blockHide");
});

button2.addEventListener("click", function () {
  itemTwo.classList.toggle("itemMove");
});






