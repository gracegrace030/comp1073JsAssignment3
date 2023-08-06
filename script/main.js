// Audio
const soundEating = document.getElementById("sound-eating");
const soundAdd = document.getElementById("sound-add");
const soundDelete = document.getElementById("sound-delete");
// This causes sound delay:
// const soundEating = new Audio("./Voicy_Eating_sound_effect.mp3");

const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const btnAddItem = document.getElementById("btn-add-item");
const btnRandomItem = document.getElementById("btn-random-item");
const inputItem = document.getElementById("input-item");
const toDoList = document.querySelector("#to-do-list ul");
const completeList = document.querySelector("#completed-list ul");

const randomFoodList = ["Apple", "Pizza", "Pumpkins", "Chipotle Peppers", "Hazelnuts", "Ketchup"];

btnAddItem.addEventListener("click", newListItem);
inputItem.addEventListener("keypress",(e)=>{
  if(e.key === "Enter"){
    e.preventDefault();
    btnAddItem.click();
  }
})

btnRandomItem.addEventListener("click", fillRandomFood);

// Random Food ----------------------------------

function genRandomFood(){
  const randNum = Math.floor(Math.random() * randomFoodList.length);
  return randomFoodList[randNum];
}

function fillRandomFood(){
  inputItem.value = genRandomFood();
  inputItem.classList.add("yellow");
  setTimeout(() => {
    inputItem.classList.remove("yellow");
  } , 300);
}


// New List Item Function ----------------------------------

function newListItem(){
  inputValue = inputItem.value;
  if (inputValue !== null && inputValue !== "") {
    
    header.classList.remove("header-down");
    footer.classList.remove("footer-up");
    main.classList.add("main-height");
    // Play Sound
    soundAdd.load();
    soundAdd.play();

    let li = document.createElement("li");
    toDoList.appendChild(li);

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox")
    li.appendChild(checkbox);
    checkbox.addEventListener("change", (e)=>{
      if (e.target.checked){
        // Replay sound if sound is playing
        soundEating.load();
        // Add pac man effect when checkbox is on
        pacMan(e);
        setTimeout(()=>{
          // List item be moved to bottom
          removePacMan(e);
          li.classList.toggle("strikethrough");
          completeList.appendChild(li);
        },1600);
      }
      else {
        li.classList.toggle("strikethrough");
        toDoList.appendChild(li);
      }
    });

    let span = document.createElement("span");
    span.innerHTML = inputValue;
    li.appendChild(span);
    
    let btnDelete = document.createElement("button");
    btnDelete.innerHTML = "X";
    li.appendChild(btnDelete);
    btnDelete.addEventListener("click", () => {
      if (confirm("Are you sure to delete?")){
        
        li.parentNode.removeChild(li);

        // Replay sound if sound is playing
        soundDelete.load();
        soundDelete.play();
        
        // if two lists are empty, initial setup
        if ((!completeList.hasChildNodes()) && (!toDoList.hasChildNodes())){
          header.classList.add("header-down");
          footer.classList.add("footer-up");
          main.classList.remove("main-height");
        }
      }
    });

    // Clear input field
    inputItem.value = "";
    inputItem.focus();
  }
  else{
    // If input field is empty
    inputItem.focus();
  }
}


// Pac Man Effect ----------------------------------
function pacMan(e){
  // Add a pac man
  const target = e.target;
  const parent = target.parentNode;

  const pacManWrapper = document.createElement("div");
  pacManWrapper.setAttribute("class", "pac-man-wrapper");
  parent.appendChild(pacManWrapper);

  const pacManBg = document.createElement("div");
  pacManBg.setAttribute("class", "pac-man-bg");
  pacManWrapper.appendChild(pacManBg);

  const pacMan = document.createElement("div");
  pacMan.setAttribute("class", "pac-man");
  pacManWrapper.appendChild(pacMan);

  // play sound
  soundEating.play();
}

function removePacMan(e){
  // Remove a pac man
  const target = e.target;
  const parent = target.parentNode;
  const pacManWrapper = parent.querySelector(".pac-man-wrapper");
  parent.removeChild(pacManWrapper);
}



