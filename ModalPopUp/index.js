const openBtn = document.querySelector(".open");
const content = document.querySelector(".content");
const closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("click",()=>{
    content.classList.add("show")
})

closeBtn.addEventListener("click",()=>{
   content.classList.remove("show");
})
