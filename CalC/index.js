const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("btn"));
// console.log(button);
// button.addEventListener("click",function(){
//     console.log(button)
// })it was wrong

// console.log(typeof(button));

buttons.map((btn)=>{
    // console.log(btn)
    btn.addEventListener("click",function(e){
        // console.log(e.target.innerText)
        let key= e.target.innerText;

        if(key=="A/C"){
            display.innerText=""
        }else if(key=="DEL"){
            if(display.innerText=="Infinity"){
                display.innerText="";
            }else{
                    display.innerText = display.innerText.slice(0, -1);
            }
            
        }else if(key=="="){
            if(display.innerText){
                display.innerText = eval(display.innerText);
            }
            
        }else{
            display.innerText=display.innerText+key;
        }
    })
});
// on clicking every button there should occur some event that's y we will map every button and will target every button(btn)
// using addEventListener
