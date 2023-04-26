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

import {getDatabase, set, get, update, remove, ref, child}
from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js"

let db = getDatabase();
var enterID = document.getElementById("enterID");
var emptyButton = document.getElementById("empty");
var saveButton = document.getElementById("save");
var showButton = document.getElementById("show");

function addData() {
  for(let i = 0; i < document.getElementsByClassName("inputBox").length; i++) {
    let changedDate = document.getElementsByClassName("inputBox")[i];
    let background = document.getElementsByClassName("dates")[i];
    set(ref(db, "Content/" + enterID.value + "/" + i), {
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

// let firstDate = document.getElementsByClassName("inputBox")[0];
// firstDate.addEventListener("focusOut", addData(0));

// window.onload = function() {
//   for(let i = 0; i < document.getElementsByClassName("dates").length; i++) {
//     let background = document.getElementsByClassName("dates")[i]; 
//     background.style.backgroundColor = rgb(255, 255, 255);
//   }
// }

function findData() {
  const dbref = ref(db)
  for(let i = 0; i < document.getElementsByClassName("inputBox").length; i++) {
    let date = document.getElementsByClassName("inputBox")[i];
    let background = document.getElementsByClassName("dates")[i];
    
    get(child(dbref, "Content/" + enterID.value + "/" + i))
    .then((snapshot)=>{
      if (snapshot.exists()) {
        date.value = snapshot.val().Content;
        background.style.backgroundColor = snapshot.val().Color;
        
      } else {
        date.value = "";
        background.style.backgroundColor = "rgb(255, 255, 255";
      }
    })

    .catch((error)=>{
      alert(error);
    })
  }
}

function removeData() {
  for(let i = 0; i < document.getElementsByClassName("inputBox").length; i++) {
    let background = document.getElementsByClassName("dates")[i]; 
    remove(ref(db, "Content/" + enterID.value + "/" + i))
    // .then(()=>{
    //   alert("Datan togs bort.");
    // })
    // .then(()=>{
    //   background.style.backgroundColor = rgb(255, 255, 255);
    // })
    .catch((error)=>{
      alert(error);
    })
  }
  alert("Datan togs bort.")
  background.style.backgroundColor = "rgb(255, 255, 255)";
  
}

emptyButton.addEventListener("click", removeData);
saveButton.addEventListener("click", addData);
showButton.addEventListener("click", findData);