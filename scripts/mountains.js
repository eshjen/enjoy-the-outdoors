let mountainsDropdown = document.getElementById("mountains");
let detailsDiv = document.getElementById("mountainContainer");

function loadMountains(params) {
  for (const mountain of mountainsArray) {
    console.log(mountain);
  }
}
loadMountains();

//creating function to populate the mountains dropdown with mountain names
function populateDrop() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.value = mountain.name;
    option.innerText = mountain.name;
    mountainsDropdown.appendChild(option);
  }
}

// populateDrop();
// creating a function that creates a card that displays info of the selected mountain
function createMountainCard(mountainName) {
  
  const mountain = mountainsArray.filter((m) => m.name === mountainName)[0];
  
  console.log(mountain);
  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("h5");
  cardTitle.innerText = mountain.name;

  const cardDesc = document.createElement("p");
  cardDesc.innerText = mountain.desc;

  const cardElevation = document.createElement("h6");
  cardElevation.innerText = "Elevation: " + mountain.elevation;

  const cardImage = document.createElement("img");
  cardImage.src = "./images/" + mountain.img;
  cardImage.alt = mountain.name;
  console.log(cardImage.src);

  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardDesc);
  card.appendChild(cardElevation);
  
// displaying the card
  detailsDiv.innerHTML = "";
  detailsDiv.appendChild(card);
  let mountainCard = document.querySelector("#mountainContainer");
  mountainCard.style.display = "block";
}

populateDrop();

// adding event listener to change the value of the selected option when a new mountain is selected
mountainsDropdown.addEventListener("change", function () {
  const selectedMountain = mountainsDropdown.value;
  createMountainCard(selectedMountain);
});
