const img = document.querySelectorAll(".img1");
console.log(img)
// var indexValue = 0;
// function slideShow(){
//   setTimeout(slideShow, 1000);
//   var x;
  
//   // ;
//   for(x = 0; x < img.length; x++){
//     img[x].style.display = "none";
//   }
//   indexValue++;
//   if(indexValue > img.length){indexValue = 1}
//   img[indexValue -1].style.display = "block";
// }
// slideShow();\
var x=0;
function slide (){
  if(x<img.length){
  x=x+1;
  }else{
    x = 1;
  }
  img.innerHTML = "<img src="+img[x-1]+">";
}
setInterval(slide,1000);