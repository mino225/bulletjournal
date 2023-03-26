
var d = new Date();
const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
const weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

let day = d.getDate();
let dayStr = day.toString();
let month = months[d.getMonth()];
let monthStr = month.toString();
let weekday = weekdays[d.getDay()-1];

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

if (firstWeekdayOfMonth >= 5) {
    document.getElementById("datesBlankBeforeSix").style.display = "none";
    document.getElementById("datesBlankBeforeFive").style.display = "none";
}
// alert(weekdays[firstWeekdayOfMonth]);

if (monthStr.toLowerCase() == "mars") {
    day29.innerHTML = "";
    day29.style.border = "none";
    day30.innerHTML = "";
    day30.style.border = "none";
    day31.innerHTML = "";
    day31.style.border = "none";
}

else if (monthStr.toLowerCase() == "april" || monthStr.toLowerCase() == "juni" || monthStr.toLowerCase() == "september" || monthStr.toLowerCase() == "november") {
    document.getElementById("date31").style.display = "none";

    //alert("g")
}

// if (document.getElementById("dates").innerHTML == day) {
//     document.getElementById("dates").style.backgroundColor = "red";
// }

// if (document.getElementById("weekdays").innerHTML == weekday.toLowerCase()) 
// {
//     document.getElementById("weekdays").style.backgroundColor = "red";
// }