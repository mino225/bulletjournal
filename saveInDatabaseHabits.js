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

// går igenom varje kalender och formaterar dem
function formatCalenders() {
    for (let i = 0; i < document.getElementsByClassName("daysHabits").length; i++) {
        // definierar rutan för den 29:e, 30:e och 31:a
        let day29 = document.getElementsByClassName("date29")[i];
        let day30 = document.getElementsByClassName("date30")[i];
        let day31 = document.getElementsByClassName("date31")[i];
    
        // jämför med vilken dag månaden börjar och döljer olika många dagar utefter det
        if (firstWeekdayOfMonth == 7 || firstWeekdayOfMonth == 0) {
            document.getElementsByClassName("datesBlankBeforeOne")[i].style.display = "none";
            document.getElementsByClassName("datesBlankBeforeTwo")[i].style.display = "none";
            document.getElementsByClassName("datesBlankBeforeThree")[i].style.display = "none";
            document.getElementsByClassName("datesBlankBeforeFour")[i].style.display = "none";
            document.getElementsByClassName("datesBlankBeforeFive")[i].style.display = "none";
            document.getElementsByClassName("datesBlankBeforeSix")[i].style.display = "none";
        }
    
        else {
            
            if (firstWeekdayOfMonth <= 5) {
                document.getElementsByClassName("datesBlankBeforeSix")[i].style.display = "none";
            }
            
            if (firstWeekdayOfMonth <= 4) {
                document.getElementsByClassName("datesBlankBeforeFive")[i].style.display = "none";
            }
            
            if (firstWeekdayOfMonth <= 3) {
                document.getElementsByClassName("datesBlankBeforeFour")[i].style.display = "none";
            }
            
            if (firstWeekdayOfMonth <= 2) {
                document.getElementsByClassName("datesBlankBeforeThree")[i].style.display = "none";
            }
            
            if (firstWeekdayOfMonth <= 1) {
                document.getElementsByClassName("datesBlankBeforeTwo")[i].style.display = "none";
            }
        }
    
        // beroende på vilken månad det är döljer den olika många dagar i slutet
        if (monthStr.toLowerCase() == "februari") {
            day29.innerHTML = "";
            day29.style.border = "none";
            day30.innerHTML = "";
            day30.style.border = "none";
            day31.innerHTML = "";
            day31.style.border = "none";
        }
    
        else if (monthStr.toLowerCase() == "april" || monthStr.toLowerCase() == "juni" || monthStr.toLowerCase() == "september" || monthStr.toLowerCase() == "november") {
            day31.style.display = "none";
        }
    }
    
    // går igenom alla dagar och markerar vilken dag det är idag
    for (let i = 0; i < dates.length; i++) {
        if (dates[i].innerHTML.startsWith(dayStr + " ") == true) {
            dates[i].style.fontWeight = 'bold';
        }
    }
}

// skapa en ny kalender
function createCalender() {
    const dayHabits = document.getElementsByClassName("daysHabits");

    const calenderHabits = document.createElement("div");
    const calenderHabitsNode = document.createTextNode("");
    calenderHabits.appendChild(calenderHabitsNode);
    calenderHabits.classList.add("days", "daysHabits")
    document.getElementById("newCalenders").appendChild(calenderHabits);

    const habitColor = document.createElement("div");
    const habitColorNode = document.createTextNode("");
    habitColor.appendChild(habitColorNode);
    dayHabits[dayHabits.length-1].appendChild(habitColor).classList.add("habitColor");
    document.getElementsByClassName("habitColor")[document.getElementsByClassName("habitColor").length-1].style.backgroundColor = newColors();

    const habitName = document.createElement("input");
    const habitNameNode = document.createTextNode("");
    habitName.appendChild(habitNameNode);
    habitName.placeholder = "Min vana..."
    dayHabits[dayHabits.length -1].appendChild(habitName).classList.add("habitName");

    for (let i = 0; i < 6; i++) {
        let newBlankDate = document.createElement("div");
        let blank = document.createTextNode("");
        newBlankDate.appendChild(blank);
        newBlankDate.classList.add("datesBlank", "datesBlankHabits");

        if (i == 0) {
            newBlankDate.classList.add("datesBlankBeforeOne");
        } else if (i == 1) {
            newBlankDate.classList.add("datesBlankBeforeTwo");
        } else if (i == 2) {
            newBlankDate.classList.add("datesBlankBeforeThree");
        } else if (i == 3) {
            newBlankDate.classList.add("datesBlankBeforeFour");
        } else if (i == 4) {
            newBlankDate.classList.add("datesBlankBeforeFive");
        } else if (i == 5) {
            newBlankDate.classList.add("datesBlankBeforeSix");
        }

        dayHabits[dayHabits.length -1].appendChild(newBlankDate);
    }

    for (let i = 0; i < 31; i++) {
        let newDate = document.createElement("div");
        let newDateNumber = document.createTextNode(i+1);
        newDate.appendChild(newDateNumber);
        newDate.classList.add("dates", "datesHabits");
        newDate.setAttribute("onclick", `addHabitToDay(${numberOfNewCalender}, ${i})`)
        dayHabits[dayHabits.length -1].appendChild(newDate);
    }

    for (let i = 0; i < 6; i++) {
        let newBlankDate = document.createElement("div");
        let blank = document.createTextNode("");
        newBlankDate.appendChild(blank);
        dayHabits[dayHabits.length -1].appendChild(newBlankDate).classList.add("datesBlank", "datesBlankHabits");
    }

    formatCalenders();
    numberOfNewCalender += 1;
}

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

    // räknar hur många extrakalendrar man har
    let numberOfCalenders = document.getElementsByClassName("daysHabits").length - 3;
    // lägger till numret i databasen
    set(ref(db, "Content/" + hEnterID.value + "/ Habits/ ExtraCalenders"), {
        NumberOfCalenders: numberOfCalenders
    })
    // om det blir en error skrivs den ut
    .catch((error)=>{
        alert(error);
    })


    // skickar ut ett meddelande om att värdet sparades
    alert("Kalendern sparades.");
}

// hittar värdet i databasen och skriver ut
function findDataHabits() {
    // definierar en referens till databasen
    const dbref = ref(db)

    get(child(dbref, "Content/" + hEnterID.value + "/ Habits/ HabitName/" + i))
    .then((snapshot)=>{
        if (snapshot.exists()) { // det skapas olika många kalendrar beroende på det sparade värdet
        for (let i = 0; i < snapshot.val().NameOfHabit; i++) {
            createCalender();
            }
        } 
    })

    // blir det en error skrivs den ut
    .catch((error)=>{
        alert(error);
    })

    // går igenom alla dagar
    for(let i = 0; i < document.getElementsByClassName("datesHabits").length; i++) {
        // definierar dagen
        let dateHabit = document.getElementsByClassName("datesHabits")[i];
    
        // hämtar värdet ut databasen
        get(child(dbref, "Content/" + hEnterID.value + "/ Habits/ ExtraCalenders"))
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

// beroende på vilken knapp du trycker på körs olika funktioner
hShowButton.addEventListener("click", findDataHabits);
hSaveButton.addEventListener("click", addDataHabits);
hEmptyButton.addEventListener("click", removeDataHabits);