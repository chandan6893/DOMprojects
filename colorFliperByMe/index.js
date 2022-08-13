const colors=["red","yellow","blue","green","orange"];
const btn=document.getElementById("click");
const color=document.getElementsByClassName("color");

btn.addEventListener("click",function(){
    document.body.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
    color.textContent= colors[Math.floor(Math.random() * colors.length)];
});
