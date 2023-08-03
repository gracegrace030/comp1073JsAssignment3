const btnAddItem = document.getElementById("btn-add-item");
const inputItem = document.getElementById("input-item");
const toDoList = document.querySelector("#to-do-list ul");

btnAddItem.addEventListener("click", () => {
  inputValue = inputItem.value;
  if (inputValue !== null && inputValue !== "") {
    let li = document.createElement("li");
    li.innerHTML = inputValue;
    toDoList.appendChild(li);

    let btnDelete = document.createElement("button");
    btnDelete.innerHTML = "Delete";
    li.appendChild(btnDelete);
    btnDelete.addEventListener("click", () => {
      toDoList.removeChild(li);
    });

    inputItem.value = "";
    inputItem.focus();
  }
});
