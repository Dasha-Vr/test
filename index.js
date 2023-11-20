const button1 = document.querySelector(".btn-warning");
const button2 = document.querySelector(".btn-success");
const sectionOne = document.querySelector(".sectionOne");
const itemTwo = document.querySelector(".itemTwo");

const modalsBtn = document.querySelector(".modalsBtn");
const modals = document.querySelector(".modals");
const modalOverlay = document.querySelector(".modal-overlay");
const modalWindow = document.querySelector(".modal-window");
const modalsClose = document.querySelector(".modalsClose");


document.addEventListener("DOMContentLoaded", function () {
  modals.classList.add("modals-visible");
  modalOverlay.classList.add("modal-visible");
  modalWindow.classList.add("modals-visible");
});


modalsClose.addEventListener("click", function () {
  modals.classList.remove("modals-visible");
  modalOverlay.classList.remove("modal-visible");
  modalWindow.classList.remove("modals-visible");
})


modalOverlay.addEventListener("click", function () {
  modals.classList.remove("modals-visible");
  modalOverlay.classList.remove("modal-visible");
  modalWindow.classList.remove("modals-visible");
})

button1.addEventListener("click", function () {
  sectionOne.classList.toggle("sectionHide");
})

button2.addEventListener("click", function () {
  itemTwo.classList.toggle("itemMove");
})


if (window.jQuery) {
  console.log("Hello world!")
} else {
  console.log("Hello!")
}


