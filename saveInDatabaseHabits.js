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
var hEnterID = document.getElementById("enterIDHabits");
var hEmptyButton = document.getElementById("emptyHabits");
var hSaveButton = document.getElementById("saveHabits")
var hShowButton = document.getElementById("showHabits");

function addDataHabits() {
    for (let i = 0; i < document.getElementsByClassName("daysHabits").length; i++) {
        for(let j = 0; j < document.getElementsByClassName("datesHabits").length; j++) {
        let dateHabit = document.getElementsByClassName("datesHabits")[j];
        set(ref(db, "Content/" + hEnterID.value + "/ Habits" + "/" + j), {
            HabitColor: dateHabit.style.backgroundColor
        })
        .catch((error)=>{
            alert(error);
        })
        }
        alert("Kalendern sparades.");
        return true;
    } 
}

function findDataHabits() {
    const dbref = ref(db)
    for (let i = 0; i < document.getElementsByClassName("daysHabits").length; i++) {
        for(let j = 0; j < document.getElementsByClassName("datesHabits").length; j++) {
            let dateHabit = document.getElementsByClassName("datesHabits")[j];
        
            get(child(dbref, "Content/" + hEnterID.value + "/ Habits/" + j))
            .then((snapshot)=>{
                if (snapshot.exists()) {
                dateHabit.style.backgroundColor = snapshot.val().HabitColor;
                
                } else {
                dateHabit.style.backgroundColor = "rgb(255, 255, 255)";
                }
            })

            .catch((error)=>{
                alert(error);
            })
            }
            alert("Den sparade kalendern visas.")
        }
    }

function removeDataHabits() {
    if (confirm("Är du säker på att du vill ta bort din kalender?")) {
        for (let i = 0; i < document.getElementsByClassName("daysHabits").length; i++) {
            for(let j = 0; j < document.getElementsByClassName("datesHabits").length; j++) {
            let dateHabit = document.getElementsByClassName("datesHabits")[j];
            remove(ref(db, "Content/" + hEnterID.value + "/ Habits/" + j))
            .catch((error)=>{
                alert(error);
            })
            dateHabit.style.backgroundColor = "rgb(255, 255, 255)";
            }
            hEnterID.value = "";
            alert("Datan togs bort.");
        }
    }
}

hShowButton.addEventListener("click", findDataHabits);
hSaveButton.addEventListener("click", addDataHabits);
hEmptyButton.addEventListener("click", removeDataHabits);