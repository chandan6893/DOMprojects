const button = document.querySelector(".button");
const closeButton = document.querySelector(".close-button");
// const outerContainer = document.querySelector(".outer-container");
const innerContainer = document.querySelector(".inner-container");

button.addEventListener("click",function(){
    // if(innerContainer.classList.contains("show-box")){
    //     innerContainer.classList.remove("show-box")
    // }else{
    //     innerContainer.classList.add("show-box");
    // }

    
    //    or
    // innerContainer.classList.remove("hide");

    // or
    innerContainer.classList.toggle("show-box");


});
closeButton.addEventListener("click",function(){
    innerContainer.classList.remove("show-box");
    // innerContainer.classList.add("hide");
})