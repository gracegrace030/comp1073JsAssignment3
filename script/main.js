// Audio
const soundEating = document.getElementById("sound-eating");
// This causes sound delay:
// const soundEating = new Audio("./Voicy_Eating_sound_effect.mp3");

const btnAddItem = document.getElementById("btn-add-item");
const inputItem = document.getElementById("input-item");
const toDoList = document.querySelector("#to-do-list ul");
const completeList = document.querySelector("#completed-list ul");

btnAddItem.addEventListener("click", newListItem);
inputItem.addEventListener("keypress",(e)=>{
  if(e.key === "Enter"){
    e.preventDefault();
    btnAddItem.click();
  }
})

// New List Item Function ----------------------------------

function newListItem(){
  inputValue = inputItem.value;
  if (inputValue !== null && inputValue !== "") {
    
    let li = document.createElement("li");
    toDoList.appendChild(li);

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox")
    li.appendChild(checkbox);
    checkbox.addEventListener("click", (e)=>{
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
      }
    });

    // Clear input field
    inputItem.value = "";
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



