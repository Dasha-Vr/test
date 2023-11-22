const modals = document.querySelector(".modals");
const body = document.querySelector("body");
const modalsClose = document.querySelector(".modalsClose");
const modalOverlay = document.querySelector(".modal-overlay");

const button1 = document.querySelector(".btn-warning");
const button2 = document.querySelector(".btn-success");
const sectionOne = document.querySelector(".sectionOne");
const itemTwo = document.querySelector(".itemTwo");


function modalToggle() {
  modals.classList.toggle("modals-visible");
  body.classList.toggle("overflowHidden");
}


document.addEventListener("DOMContentLoaded", modalToggle);

modalsClose.addEventListener("click", modalToggle);

modalOverlay.addEventListener("click", function (event) {
  if (!event.target.closest('.modal-window')) {
    modalToggle();
  }
});


button1.addEventListener("click", function () {
  sectionOne.classList.toggle("sectionHide");
})

button2.addEventListener("click", function () {
  itemTwo.classList.toggle("itemMove");
})






