"use strict";

const locationRadio = document.querySelector("#locationRadio");
const typeRadio = document.querySelector("#typeRadio");

const locationContainer = document.querySelector("#locationContainer");
const parkTypeContainer = document.querySelector("#parkTypeContainer");

function searchTypeChanged() {
  if (locationRadio.checked) {
    locationContainer.style.display = "block";
  } else {
    locationContainer.style.display = "none";
  }
  if (typeRadio.checked) {
    parkTypeContainer.style.display = "block";
  } else {
    parkTypeContainer.style.display = "none";
  }
}

locationRadio.onchange = searchTypeChanged;
typeRadio.onchange = searchTypeChanged;
searchTypeChanged();

function showSelect() {
  console.log('hello')
  let locationSelect = document.querySelector("#locationDropdown");
  let parkSelect = document.querySelector("#parkTypeDropdown");
  let locationRadio = document.querySelector("#locationRadio");
  let typeRadio = document.querySelector("#typeRadio");
  if (locationRadio.checked) {
    locationSelect.style.display = "block";
    console.log(locationSelect.style.display);
  } else {
    parkSelect.style.display = "block";
    console.log(parkSelect.style.display);
  }
}
let locationTBody = document.querySelector("#locationTBody");
console.log(locationTBody);
let locationDropdown = document.querySelector("#locationDropdown");

function populateDrop() {
  for (const state of locationsArray) {
    let option = document.createElement("option");
    option.value = state;
    option.innerText = state;
    locationDropdown.appendChild(option);
  }
}

populateDrop();

function loadParks() {
  for (const park of nationalParksArray) {
    //
    let tr = document.createElement("tr");
    locationTBody.appendChild(tr);

    let td1 = document.createElement("td");
    td1.innerText = park.LocationName;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerText = park.Address;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerText = park.City;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerText = park.State;
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    td5.innerText = park.ZipCode;
    tr.appendChild(td5);

    let td6 = document.createElement("td");
    td6.innerText = park.Phone;
    tr.appendChild(td6);

    let td7 = document.createElement("td");
    td7.innerText = park.Visit;
    tr.appendChild(td7);

    locationTBody.appendChild(tr);
  }
}

loadParks();

function filterByState() {
  let selectedState = locationDropdown.value;
  locationTBody.innerHTML = "";
  if (selectedState === "1") {
    nationalParksArray.forEach((park) => {
      let tr = document.createElement("tr");
      locationTBody.appendChild(tr);

      let td1 = document.createElement("td");
      td1.innerText = park.LocationName;
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      td2.innerText = park.Address;
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      td3.innerText = park.City;
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      td4.innerText = park.State;
      tr.appendChild(td4);

      let td5 = document.createElement("td");
      td5.innerText = park.ZipCode;
      tr.appendChild(td5);

      let td6 = document.createElement("td");
      td6.innerText = park.Phone;
      tr.appendChild(td6);

      let td7 = document.createElement("td");
      td7.innerText = park.Visit;
      tr.appendChild(td7);
    });
  } else {
    let filteredState = nationalParksArray.filter((park) => park.State === selectedState);

    filteredState.forEach((park) => {
      let tr = document.createElement("tr");
      locationTBody.appendChild(tr);

      let td1 = document.createElement("td");
      td1.innerText = park.LocationName;
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      td2.innerText = park.Address;
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      td3.innerText = park.City;
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      td4.innerText = park.State;
      tr.appendChild(td4);

      let td5 = document.createElement("td");
      td5.innerText = park.ZipCode;
      tr.appendChild(td5);

      let td6 = document.createElement("td");
      td6.innerText = park.Phone;
      tr.appendChild(td6);

      let td7 = document.createElement("td");
      td7.innerText = park.Visit;
      tr.appendChild(td7);
    });
  }
}

function filterByParkType (){
  
}
