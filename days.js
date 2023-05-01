// definierar datumet
var d = new Date();

// definerar månaderna och veckodagarna
const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
const weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

// definierar dagens datum, månaden och veckodagen
let day = d.getDate();
let dayStr = day.toString();
let month = months[d.getMonth()];
let monthStr = month.toString();
let weekday = weekdays[d.getDay()];

// definierar elementet för 29:e, 30:e och 31:a
const day29 = document.getElementById("date29");
const day30 = document.getElementById("date30");
const day31 = document.getElementById("date31");

// definierar lista med datumen
let dates = document.getElementsByClassName("dates");

// skriver ut veckodagen, datumet och månaden
document.getElementById("todaysWeekday").innerHTML = weekday + "\xa0";
document.getElementById("todaysDate").innerHTML = day + "\xa0";
document.getElementById("todaysMonth").innerHTML = month;

// räknar ut vilken veckodag månaden börjar på
let firstDateOfMonth = day % 7
let firstWeekdayOfMonth = d.getDay() - firstDateOfMonth;
if (firstWeekdayOfMonth < 0) {  // om det blir negativt lägger den till 7 för att få ett positivt tal
    firstWeekdayOfMonth += 7;
}

// döljer olika många element beroende på vilken dag månaden börjar på
if (firstWeekdayOfMonth == 7 || firstWeekdayOfMonth == 0) {
    document.getElementById("datesBlankBeforeOne").style.display = "none";
    document.getElementById("datesBlankBeforeTwo").style.display = "none";
    document.getElementById("datesBlankBeforeThree").style.display = "none";
    document.getElementById("datesBlankBeforeFour").style.display = "none";
    document.getElementById("datesBlankBeforeFive").style.display = "none";
    document.getElementById("datesBlankBeforeSix").style.display = "none";
}

else {
    if (firstWeekdayOfMonth <= 5) {
        document.getElementById("datesBlankBeforeSix").style.display = "none";
    }
    
    if (firstWeekdayOfMonth <= 4) {
        document.getElementById("datesBlankBeforeFive").style.display = "none";
    }
    
    if (firstWeekdayOfMonth <= 3) {
        document.getElementById("datesBlankBeforeFour").style.display = "none";
    }
    
    if (firstWeekdayOfMonth <= 2) {
        document.getElementById("datesBlankBeforeThree").style.display = "none";
    }
    
    if (firstWeekdayOfMonth <= 1) {
        document.getElementById("datesBlankBeforeTwo").style.display = "none";
    }
}

// döljer vissa datum beroende på vilken månad det är
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

// går igenom alla datum och tar reda på vilken dag det är idag
// markerar vilken dag det är idag
for (let i = 0; i < dates.length; i++) {
    if (dates[i].innerHTML.startsWith(dayStr + " ") == true) {
        dates[i].style.fontWeight = 'bold';
        dates[i].style.fontSize = "large";
    }
}