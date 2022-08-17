const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".sidebar-header");
const sidebar = document.querySelector(".sidebar");



toggleBtn.addEventListener("click",function(){
    // if(sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar");
    // }
    // else{
    //     sidebar.classList.add("show-sidebar");
    // }

    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click",function(){
    sidebar.classList.remove("class","show-sidebar")
})










  
 
