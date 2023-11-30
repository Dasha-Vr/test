const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modalClose");
const modalOverlay = document.querySelector(".modal-overlay");

const button1 = document.querySelector(".btn-warning");
const button2 = document.querySelector(".btn-success");
const blockOne = document.querySelector(".blockOne");
const itemTwo = document.querySelector(".itemTwo");


function modalToggle() {
  modal.classList.toggle("modal-visible");
}


document.addEventListener("DOMContentLoaded", modalToggle);

modalClose.addEventListener("click", modalToggle);

modalOverlay.addEventListener("click", function (event) {
  if (!event.target.closest('.modal-window')) {
    modalToggle();
  }
});


button1.addEventListener("click", function () {
  blockOne.classList.toggle("blockHide");
})

button2.addEventListener("click", function () {
  itemTwo.classList.toggle("itemMove");
})






