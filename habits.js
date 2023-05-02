// definierar datumet
var d = new Date();

// definierar månaderna och veckodagarna
const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
const weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

// definierar dagens datum, månad och veckodag
let day = d.getDate();
let dayStr = day.toString();
let month = months[d.getMonth()];
let monthStr = month.toString();
let weekday = weekdays[d.getDay()];
let dates = document.getElementsByClassName("dates");

// definierar knappen för att skapa kalender
var hAddCalender = document.getElementById("addCalender");

// definierar färgerna för habits
let colorsIndex = -1;
const newColors = ()=> {
    colorsIndex++;
    const colors = ["lightblue", "yellow", "lightgrey", "lavender", "coral", "lightgreen"]
    if (colorsIndex > colors.length-1) {
        colorsIndex = 0;
    }
    return colors[colorsIndex];
}

const colors = ["lavender", "coral", "lightgreen", "lightblue", "yellow", "lightgrey"];

// markerar en dag i kalendern med en färg
function addHabitToDay(calender, number) {
    // definierar vilken dag du tryckt på
    let markedDay = document.getElementsByClassName("datesHabits")[calender*31 + number];

    // om dagen inte har en färg får den en färg
    if (calender > colors.length-1) {
        calender -= colors.length;
    }

    if (markedDay.style.backgroundColor != colors[calender]) {
        markedDay.style.backgroundColor = colors[calender];
    } 
    // annars blir den vit
    else {
        markedDay.style.backgroundColor = "rgb(255, 255, 255)";
    }
    
}

// gör att rutan vid namnet får rätt färg
for (let i = 0; i < document.getElementsByClassName("habitColor").length; i++) {
    document.getElementsByClassName("habitColor")[i].style.backgroundColor = colors[i];
}

// räknar ut vilken dag månaden börjar på
let firstDateOfMonth = day % 7
let firstWeekdayOfMonth = d.getDay() - firstDateOfMonth;
if (firstWeekdayOfMonth < 0) {
    firstWeekdayOfMonth += 7;
}

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

// hålla reda på vilken kalender du är på
let numberOfNewCalender = 3;

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

    // if (numberOfNewCalender == 3) {
    //     for (let i = 0; i < 2; i++) {
    //         const calenderHabits = document.createElement("div");
    //         const calenderHabitsNode = document.createTextNode("");
    //         calenderHabits.appendChild(calenderHabitsNode);
    //         document.getElementById("newCalenders").appendChild(calenderHabits).classList.add("days", "daysHabits");
    //     }
    //     numberOfNewCalender += 1;
    // } 
    // FUNGERAR INTE
    // else if (numberOfNewCalender == 4) {
    //     for (let i = 0; i < 2; i++) {
    //         document.getElementsByClassName("daysHabits")[document.getElementsByClassName("daysHabits").length -1].parentNode.removeChild(document.getElementsByClassName("daysHabits")[document.getElementsByClassName("daysHabits").length -1]);
    //     }
    //     const calenderHabits = document.createElement("div");
    //     const calenderHabitsNode = document.createTextNode("");
    //     calenderHabits.appendChild(calenderHabitsNode);
    //     document.getElementById("newCalenders").appendChild(calenderHabits).classList.add("days", "daysHabits");

    //     numberOfNewCalender += 1;
    // }
}

formatCalenders();
hAddCalender.addEventListener("click", createCalender);