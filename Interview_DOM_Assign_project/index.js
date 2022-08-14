const btns=document.querySelectorAll(".all_btn");
const create=document.querySelector("c_t_btn");
// const text=document.querySelector("#textarea");
const textarea=document.createElement("textarea");



// console.log(btns);
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const value=e.currentTarget.classList;
        if(value.contains("all")){
        textarea.append(btn)
        }
    })
})