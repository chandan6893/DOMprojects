const btns=document.querySelectorAll(".all_btn");
const create=document.querySelector("c_t_btn");
const text=document.querySelector("#textarea");

// console.log(btns);

// const textarea=document.createElement("textarea");
// textarea.classList.add("textarea");
// textarea.placeholder="Please entertask";

// let formElement=`<form class="form">
// <textarea name="textarea" class="textarea" cols="30" rows="10" placeholder="please enter task">
// </textarea> 

// </form>
// `;
// textarea.insertAdjacentHTML("beforeend",formElement);
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const value=e.currentTarget.classList;
        if(value.contains("all")){
        textarea.append(btn)
        }
    })
})



