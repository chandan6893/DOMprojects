const form= document.getElementById("form");
const addItemsInput = document.querySelector("#addItemsInput");
const addItemsButton = document.querySelector("#addItemsButton");
const items = document.querySelector(".items")
// console.log(form)

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let item = addItemsInput.value;
    // console.log(item)
   if(item.length>1){
     const itemsAndActions = document.createElement("div");
     itemsAndActions.classList.add("itemsAndActions");

     const newItems = document.createElement("div");
     newItems.classList.add("newItems");

     itemsAndActions.append(newItems);

     const newItemsInput = document.createElement("input");
     newItemsInput.classList.add("newItemsInput");
     newItemsInput.type = "text";
     //    newItemsInput.setAttribute("readonly","readonly")
     //    newItemsInput.value=item; vvi***
     newItemsInput.value = item;

     newItems.append(newItemsInput);

     const actions = document.createElement("div");
     actions.classList.add("actions");

     itemsAndActions.append(actions);

     const editSave = document.createElement("button");
     editSave.classList.add("editSave");
     editSave.innerText = "SAVE";

     const deleteBtn = document.createElement("button");
     deleteBtn.classList.add("deleteBtn");
     deleteBtn.innerText = "DELETE";

     actions.append(editSave);
     actions.append(deleteBtn);

     items.append(itemsAndActions);

     addItemsInput.value = "";
     // it would empty the input field

     editSave.addEventListener("click", (e) => {
       if (editSave.innerText == "EDIT") {
         editSave.innerText = "SAVE";
         editSave.removeAttribute("readonly");
       } else if ((editSave.innerText = "SAVE")) {
         editSave.innerText = "EDIT";
         editSave.setAttribute("readonly", "readonly");
       }
     });

     deleteBtn.addEventListener("click", (e) => {
       if ((deleteBtn.innerText = "DELETE")) {
         items.removeChild(itemsAndActions);
       }
     });
   }








})