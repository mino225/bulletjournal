// importerar och definerar databasen

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5SUBsKSwryxkIA7D-PaVGwqNEjyGPZQU",
  authDomain: "bulletjournalonline-2d341.firebaseapp.com",
  databaseURL: "https://bulletjournalonline-2d341-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bulletjournalonline-2d341",
  storageBucket: "bulletjournalonline-2d341.appspot.com",
  messagingSenderId: "894734888494",
  appId: "1:894734888494:web:b0bdb333274360252279bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, set, get, remove, ref, child}
from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js"

// definerar databasen
let db = getDatabase();

// definierar knappar för användarnamn, ta bort, spara och visa
var mEnterID = document.getElementById("enterIDMoods");
var mEmptyButton = document.getElementById("emptyMoods");
var mSaveButton = document.getElementById("saveMoods");
var mShowButton = document.getElementById("showMoods");

// tömmer kalendern
function emptyCalender() {
  // går igenom alla dagar och tömmer textrutan samt ändrar bakgrundsfärgen till vit
  for(let i = 0; i < document.getElementsByClassName("inputBox").length; i++) {
    let background = document.getElementsByClassName("dates")[i]; 
    let date = document.getElementsByClassName("inputBox")[i];
    background.style.backgroundColor = "rgb(255, 255, 255)";
    date.style.value = "";
  }

  // tömmer rutan för användarnamnet
  mEnterID.value = "";
}

// lägger till data i databasen
function addDataMoods() {

  // går igenom kalendern
  for(let i = 0; i < document.getElementsByClassName("inputBox").length; i++) {
    // definerar rutan för dagen och textrutan
    let changedDate = document.getElementsByClassName("inputBox")[i];
    let background = document.getElementsByClassName("dates")[i];

    // lägger in textrutans värde och dagens bakgrundsfärg i databasen
    set(ref(db, "Content/" + mEnterID.value + "/ Moods/" + i), {
      Content: changedDate.value,
      Color: background.style.backgroundColor
    })
    .catch((error)=>{ // om det blir en error skrivs det ut
      alert(error);
    })
  }
  
  // skriver ut att kalendern sparades
  alert("Kalendern sparades.");
  return true;
}

// hittar data i databasen
function findDataMoods() {
  // definierar referensen till databasen
  const dbref = ref(db)

  // går igenom dagarna
  for(let i = 0; i < document.getElementsByClassName("inputBox").length; i++) {
    // definerar rutan och textrutan
    let date = document.getElementsByClassName("inputBox")[i];
    let background = document.getElementsByClassName("dates")[i];
    
    // hämtar värdet ur databasen
    get(child(dbref, "Content/" + mEnterID.value + "/ Moods/" + i))
    .then((snapshot)=>{
      if (snapshot.exists()) { // om innehållet existerar skriver den ut det
        date.value = snapshot.val().Content;
        background.style.backgroundColor = snapshot.val().Color;
        
      } else { // annars är textrutan tom och bakgrundsfärgen vit
        date.value = "";
        background.style.backgroundColor = "rgb(255, 255, 255)";
      }
    })

    // om det blir en error skrivs det ut
    .catch((error)=>{
      alert(error);
    })
  }

  // skickar ett meddelande att kalendern visas
  alert("Den sparade kalendern visas.")
}

// tar bort data ur databsen
function removeDataMoods() {
  // skickar en fråga om man vill du bort den
  if (confirm("Är du säker på att du vill ta bort din kalender?")) {
    // går igenom kalendern
    for(let i = 0; i < document.getElementsByClassName("inputBox").length; i++) {
      // definierar rutan och textrutan
      let date = document.getElementsByClassName("inputBox")[i];
      let background = document.getElementsByClassName("dates")[i];

      // tar bort datan
      remove(ref(db, "Content/" + mEnterID.value + "/ Moods/" + i))
      .catch((error)=>{ // om det blir en error skrivs den ut
        alert(error);
      })

      // textrutan töms och bakgrundsfärgen blir vit
      date.value = "";
      background.style.backgroundColor = "rgb(255, 255, 255)";
    }

    // användarnamnet tas bort
    mEnterID.value = "";

    // skickar ett meddelande om att datan togs bort
    alert("Datan togs bort.");
  }
}

// tömmer kalendern
emptyCalender();

// om man klickar på en knapp körs olika funktioner
mEmptyButton.addEventListener("click", removeDataMoods);
mSaveButton.addEventListener("click", addDataMoods);
mShowButton.addEventListener("click", findDataMoods);