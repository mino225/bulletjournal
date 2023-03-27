var d = new Date();
const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
const weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

let day = d.getDate();
let dayStr = day.toString();
let month = months[d.getMonth()];
let monthStr = month.toString();
let weekday = weekdays[d.getDay()];

const day29 = document.getElementById("date29");
const day30 = document.getElementById("date30");
const day31 = document.getElementById("date31");

document.getElementById("todaysWeekday").innerHTML = weekday + "\xa0";
document.getElementById("todaysDate").innerHTML = day + "\xa0";
document.getElementById("todaysMonth").innerHTML = month;

let firstDateOfMonth = day % 7
let firstWeekdayOfMonth = d.getDay() - firstDateOfMonth;
if (firstWeekdayOfMonth < 0) {
    firstWeekdayOfMonth += 7;
}

if (firstWeekdayOfMonth == 7) {
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
        document.getElementById("datesBlankBeforeThree").style.display = "none";}
    
    if (firstWeekdayOfMonth <= 1) {
        document.getElementById("datesBlankBeforeTwo").style.display = "none";
    }
    
    if (firstDateOfMonth <= 0) {
        document.getElementById("datesBlankBeforeOne").style.display = "none";
    }
}

if (monthStr.toLowerCase() == "februari") {
    day29.innerHTML = "";
    day29.style.border = "none";
    day30.innerHTML = "";
    day30.style.border = "none";
    day31.innerHTML = "";
    day31.style.border = "none";
}

else if (monthStr.toLowerCase() == "april" || monthStr.toLowerCase() == "juni" || monthStr.toLowerCase() == "september" || monthStr.toLowerCase() == "november") {
    document.getElementById("date31").style.display = "none";
}