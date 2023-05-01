// importerar databasen

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

// definierar databasen
let db = getDatabase();

// definierar knapparna
var hEnterID = document.getElementById("enterIDHabits");
var hEmptyButton = document.getElementById("emptyHabits");
var hSaveButton = document.getElementById("saveHabits")
var hShowButton = document.getElementById("showHabits");
var hAddCalender = document.getElementById("addCalender");

// definierar färgerna för habits
const colors = ["lavender", "coral", "lightgreen", "lightblue", "yellow", "lightgrey"];

// lägger till data i databasen
function addDataHabits() {
    // går igenom alla datum och sparar ner bakgrundsfärgen
    for(let i = 0; i < document.getElementsByClassName("datesHabits").length; i++) {
        // definerar dagen
        let dateHabit = document.getElementsByClassName("datesHabits")[i];

        // sparar bakgrundsfärgen i databasen
        set(ref(db, "Content/" + hEnterID.value + "/ Habits/ HabitMarked/" + i), {
            HabitColor: dateHabit.style.backgroundColor
        })

        // om det blir en error skrivs den ut
        .catch((error)=>{
            alert(error);
        })
    }

    // går igenom alla kalendrar och sparar namnet på habiten
    for (let i = 0; i < document.getElementsByClassName("habitName").length; i++) {
        // definierar namnet på habiten
        let nameOfHabit = document.getElementsByClassName("habitName")[i];

        // lägger till namnet i databasen
        set(ref(db, "Content/" + hEnterID.value + "/ Habits/ HabitName/" + i), {
            NameOfHabit: nameOfHabit.value
        })

        // om det blir en error skrivs den ut
        .catch((error)=>{
            alert(error);
        })
    }

    // skickar ut ett meddelande om att värdet sparades
    alert("Kalendern sparades.");
}

// hittar värdet i databasen och skriver ut
function findDataHabits() {
    // definierar en referens till databasen
    const dbref = ref(db)

    // går igenom alla dagar
    for(let i = 0; i < document.getElementsByClassName("datesHabits").length; i++) {
        // definierar dagen
        let dateHabit = document.getElementsByClassName("datesHabits")[i];
    
        // hämtar värdet ut databasen
        get(child(dbref, "Content/" + hEnterID.value + "/ Habits/ HabitMarked/" + i))
        .then((snapshot)=>{
            if (snapshot.exists()) { // om värdet existerar ändrar den färgen
            dateHabit.style.backgroundColor = snapshot.val().HabitColor;
            
            } else { // annars blir den vit
            dateHabit.style.backgroundColor = "rgb(255, 255, 255)";
            }
        })

        // blir det en error skrivs den ut
        .catch((error)=>{
            alert(error);
        })
    }

    // går igenom kalendrarna
    for (let i = 0; i < document.getElementsByClassName("habitName").length; i++) {
        // definierar namnet på habiten
        let nameOfHabit = document.getElementsByClassName("habitName")[i];

        // hämtar värdet ur databasen
        get(child(dbref, "Content/" + hEnterID.value + "/ Habits/ HabitName/" + i))
            .then((snapshot)=>{
                if (snapshot.exists()) { // om värdet existerar skrivs det ut
                nameOfHabit.value = snapshot.val().NameOfHabit;
                
                } else { // annars är rutan tom
                nameOfHabit.value = "";
                }
            })

            // blir det en error skrivs den ut
            .catch((error)=>{
                alert(error);
            })
        }

        // skickar ett meddelande om att kalendern visas
        alert("Den sparade kalendern visas.")
    }
    
// tar bort data
function removeDataHabits() {
    // frågar om man vill ta bort kalendern
    if (confirm("Är du säker på att du vill ta bort din kalender?")) {
        // går igenom alla dagar 
        for(let j = 0; j < document.getElementsByClassName("datesHabits").length; j++) {
            // definierar dagen
            let dateHabit = document.getElementsByClassName("datesHabits")[j];
            
            // tar bort värdet ur databasen
            remove(ref(db, "Content/" + hEnterID.value + "/ Habits/ HabitMarked/" + j))
            
            // om det blir ett felmeddelande skrivs det ut
            .catch((error)=>{
                alert(error);
            })

            // rutan blir vit
            dateHabit.style.backgroundColor = "rgb(255, 255, 255)";
        }

        // går igenom kalendrarna
        for (let i = 0; i < document.getElementsByClassName("habitName").length; i++) {
            // definierar namnet för habiten
            let nameOfHabit = document.getElementsByClassName("habitName")[i];
            
            // tar bort namnet ur databasen
            remove(ref(db, "Content/" + hEnterID.value + "/ Habits/ HabitName/" + i))
            
            // om det blir en error skrivs den ut
            .catch((error)=>{
                alert(error);
            })

            // rutan töms
            nameOfHabit.value = "";

        }

        // användarnamnet tas bort
        hEnterID.value = "";
    }
}

// hålla reda på vilken kalender du är på
let numberOfNewCalender = 3;

// skapa en ny kalender
function createCalender() {
    const calenderHabits = document.createElement("div");
    const calenderHabitsNode = document.createTextNode("");
    calenderHabits.appendChild(calenderHabitsNode);
    document.getElementById("newCalenders").appendChild(calenderHabits).classList.add("days", "daysHabits");

    const habitColor = document.createElement("div");
    const habitColorNode = document.createTextNode("");
    habitColor.appendChild(habitColorNode);
    document.getElementsByClassName("daysHabits")[document.getElementsByClassName("daysHabits").length -1].appendChild(habitColor).classList.add("habitColor");
    document.getElementsByClassName("habitColor")[document.getElementsByClassName("habitColor").length-1].style.backgroundColor = colors[numberOfNewCalender];

    const habitName = document.createElement("input");
    const habitNameNode = document.createTextNode("");
    habitName.appendChild(habitNameNode);
    document.getElementsByClassName("daysHabits")[document.getElementsByClassName("daysHabits").length -1].appendChild(habitName).classList.add("habitName");

    for (let i = 0; i < 6; i++) {
        let newBlankDate = document.createElement("div");
        let blank = document.createTextNode("");
        newBlankDate.appendChild(blank);
        document.getElementsByClassName("daysHabits")[document.getElementsByClassName("daysHabits").length -1].appendChild(newBlankDate).classList.add("datesBlank", "datesBlankHabits");
    }

    for (let i = 0; i < 31; i++) {
        let newDate = document.createElement("div");
        let newDateNumber = document.createTextNode(i+1);
        newDate.appendChild(newDateNumber);
        document.getElementsByClassName("daysHabits")[document.getElementsByClassName("daysHabits").length -1].appendChild(newDate).classList.add("dates", "datesHabits");
    }

    for (let i = 0; i < 6; i++) {
        let newBlankDate = document.createElement("div");
        let blank = document.createTextNode("");
        newBlankDate.appendChild(blank);
        document.getElementsByClassName("daysHabits")[document.getElementsByClassName("daysHabits").length -1].appendChild(newBlankDate).classList.add("datesBlank", "datesBlankHabits");
    }

    if (numberOfNewCalender == 3) {
        for (let i = 0; i < 2; i++) {
            const calenderHabits = document.createElement("div");
            const calenderHabitsNode = document.createTextNode("");
            calenderHabits.appendChild(calenderHabitsNode);
            document.getElementById("newCalenders").appendChild(calenderHabits).classList.add("days", "daysHabits");
        }
        numberOfNewCalender += 1;
    } 
    // FUNGERAR INTE
    else if (numberOfNewCalender == 4) {
        for (let i = 0; i < 2; i++) {
            document.getElementsByClassName("daysHabits")[document.getElementsByClassName("daysHabits").length -1].parentNode.removeChild(document.getElementsByClassName("daysHabits")[document.getElementsByClassName("daysHabits").length -1]);
        }
        const calenderHabits = document.createElement("div");
        const calenderHabitsNode = document.createTextNode("");
        calenderHabits.appendChild(calenderHabitsNode);
        document.getElementById("newCalenders").appendChild(calenderHabits).classList.add("days", "daysHabits");

        numberOfNewCalender += 1;
    }
}


// beroende på vilken knapp du trycker på körs olika funktioner
hShowButton.addEventListener("click", findDataHabits);
hSaveButton.addEventListener("click", addDataHabits);
hEmptyButton.addEventListener("click", removeDataHabits);
hAddCalender.addEventListener("click", createCalender);