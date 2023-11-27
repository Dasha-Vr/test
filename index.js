const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const modalClose = document.querySelector(".modalClose");
const modalOverlay = document.querySelector(".modal-overlay");

const button1 = document.querySelector(".btn-warning");
const button2 = document.querySelector(".btn-success");
const sectionOne = document.querySelector(".sectionOne");
const itemTwo = document.querySelector(".itemTwo");


function modalToggle() {
  modal.classList.toggle("modal-visible");
  body.classList.toggle("overflowHidden");
}


document.addEventListener("DOMContentLoaded", modalToggle);

modalClose.addEventListener("click", modalToggle);

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






