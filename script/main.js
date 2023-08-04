const btnAddItem = document.getElementById("btn-add-item");
const inputItem = document.getElementById("input-item");
const toDoList = document.querySelector("#to-do-list ul");


btnAddItem.addEventListener("click", () => {
  var checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", "checkbox")

  var checkBoxLabel = document.createElement("label");
  checkBoxLabel.setAttribute("type", "label");
  checkBoxLabel.setAttribute("for", "checkbox");

  let li = document.createElement("li");
  inputValue = inputItem.value;

  if (inputValue !== null && inputValue !== "") {

    checkBoxLabel.innerHTML = inputValue;

    toDoList.insertBefore(li, toDoList.children[0]);
    li.appendChild(checkBox);
    li.appendChild(checkBoxLabel);

    let btnDelete = document.createElement("button");
    btnDelete.innerHTML = "Delete";
    li.appendChild(btnDelete);
    btnDelete.addEventListener("click", () => {
      toDoList.removeChild(li);
    });

    inputItem.value = "";
    inputItem.focus();
  }

  checkBox.addEventListener('change', event => {
    if(event.target.checked){
      checkBoxLabel.style.textDecoration = "line-through";
      toDoList.appendChild(li);
    } else {
      checkBoxLabel.style.textDecoration = "none";
    }
  
  });
});