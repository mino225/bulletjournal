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

let db = getDatabase();
var mEnterID = document.getElementById("enterIDMoods");
var mEmptyButton = document.getElementById("emptyMoods");
var mSaveButton = document.getElementById("saveMoods");
var mShowButton = document.getElementById("showMoods");
// var hEnterID = document.getElementById("enterIDHabits");
// var hEmptyButton = document.getElementById("emptyhabits");
// var hSaveButton = document.getElementById("saveHabits")
// var hShowButton = document.getElementById("showHabits");

function emptyCalender() {
  for(let i = 0; i < document.getElementsByClassName("inputBox").length; i++) {
    let background = document.getElementsByClassName("dates")[i]; 
    let date = document.getElementsByClassName("inputBox")[i];
    background.style.backgroundColor = "rgb(255, 255, 255)";
    date.style.value = "";
  }
  mEnterID.value = "";
}

function addDataMoods() {
  for(let i = 0; i < document.getElementsByClassName("inputBox").length; i++) {
    let changedDate = document.getElementsByClassName("inputBox")[i];
    let background = document.getElementsByClassName("dates")[i];
    set(ref(db, "Content/" + mEnterID.value + "/ Moods/" + i), {
      Content: changedDate.value,
      Color: background.style.backgroundColor
    })
    .catch((error)=>{
      alert(error);
    })
  }
  alert("Kalendern sparades.");
  return true;
}

function findDataMoods() {
  const dbref = ref(db)
  for(let i = 0; i < document.getElementsByClassName("inputBox").length; i++) {
    let date = document.getElementsByClassName("inputBox")[i];
    let background = document.getElementsByClassName("dates")[i];
    
    get(child(dbref, "Content/" + mEnterID.value + "/ Moods/" + i))
    .then((snapshot)=>{
      if (snapshot.exists()) {
        date.value = snapshot.val().Content;
        background.style.backgroundColor = snapshot.val().Color;
        
      } else {
        date.value = "";
        background.style.backgroundColor = "rgb(255, 255, 255)";
      }
    })

    .catch((error)=>{
      alert(error);
    })
  }
  alert("Den sparade kalendern visas.")
}

function removeDataMoods() {
  if (confirm("Är du säker på att du vill ta bort din kalender?")) {
    for(let i = 0; i < document.getElementsByClassName("inputBox").length; i++) {
      let date = document.getElementsByClassName("inputBox")[i];
      let background = document.getElementsByClassName("dates")[i]; 
      remove(ref(db, "Content/" + mEnterID.value + "/ Moods/" + i))
      .catch((error)=>{
        alert(error);
      })
      date.value = "";
      background.style.backgroundColor = "rgb(255, 255, 255)";
    }
    mEnterID.value = "";
    alert("Datan togs bort.");
  }
}

// function addDataHabits() {
//   for (let i = 0; i < document.getElementsByClassName("daysHabits").length; i++) {
//     for(let j = 0; j < document.getElementsByClassName("datesHabits").length; j++) {
//       let dateHabit = document.getElementsByClassName("datesHabits")[j];
//       set(ref(db, "Content/" + hEnterID.value + "/ Habits" + i + "/" + j), {
//         HabitColor: dateHabit.style.backgroundColor
//       })
//       .catch((error)=>{
//         alert(error);
//       })
//     }
//     alert("Kalendern sparades.");
//     return true;
//   } 
// }

emptyCalender();

mEmptyButton.addEventListener("click", removeDataMoods);
mSaveButton.addEventListener("click", addDataMoods);
mShowButton.addEventListener("click", findDataMoods);

// hSaveButton.addEventListener("click", addDataHabits);