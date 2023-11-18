const button1 = document.querySelector(".btn-warning");
const button2 = document.querySelector(".btn.btn-success");
const sectionOne = document.querySelector(".sectionOne");
const itemTwo = document.querySelector(".itemTwo");


button1.addEventListener("click", function(){
    sectionOne.classList.toggle("sectionHide");
})

button2.addEventListener("click", function(){
    itemTwo.classList.toggle("itemMove");
})






if (window.jQuery) {
    console.log("Hello world!")
  } else {
    console.log("Hello!")
  }


