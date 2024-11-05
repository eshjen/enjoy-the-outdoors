let mountainsDropdown = document.getElementById("mountains");
// let detailsDiv = document.getElementById("detailsDiv");

function loadMountains(params) {
  for (const mountain of mountainsArray) {
    // console.log(mountain);
  }
}
loadMountains();

function populateDrop() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.value = mountain.name;
    option.innerText = mountain.name;
    mountainsDropdown.appendChild(option);
  }
}

populateDrop();

// function filterByName() {
//   let selectedMountain = mountainsDropdown.value;
//   mountains.innerHTML = "";
