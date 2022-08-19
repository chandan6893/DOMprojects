const buttons = document.querySelector(".buttons");
const openButton = document.querySelector(".openButton");
const closeButton = document.querySelector(".closeButton");
const texts = document.querySelector(".texts");
const heading = document.querySelector(".heading");
const contentBox = document.querySelector(".contentBox")
// console.log(contentBox)

buttons.addEventListener("click",function(){
  texts.classList.toggle("showText")
  if(texts.classList.contains("showText")){
    openButton.classList.add("openButton");
    
    closeButton.classList.remove("closeButton")
  }
else{
    openButton.classList.remove("openButton");
    closeButton.classList.add("closeButton")
  }
})















// openButton.addEventListener("click",function(){
//     buttons.classList.remove("closeButton")
// })








  



