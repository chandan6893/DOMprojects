const colors =["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click",function(){
    // const randomNo=Math.floor(Math.random() * colors.length)
    // getRandomNo();
    
    // console.log(randomNo);
    document.body.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
    color.textContent= colors[Math.floor(Math.random() * colors.length)];
});
// function getRandomNo(){
//     return Math.floor(Math.random() * colors.length);
// }
// ************************************
// btn.addEventListener("click",async function(){
//     for(let i=0;i<colors.length;i++){
//         color.textContent=colors[i]
//         console.log(colors[i])
//         await new Promise(r => setTimeout(r, 2000));

//         document.body.style.backgroundColor=colors[i];
//     }
// });
        
        

        
        
     
        