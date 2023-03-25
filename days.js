
var d = new Date();
const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
const weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

let day = d.getDate();
let dayStr = day.toString();
let month = months[d.getMonth()];
let monthStr = month.toString();
let weekday = weekdays[d.getDay()-1];

document.getElementById("todaysWeekday").innerHTML = weekday + "\xa0";
document.getElementById("todaysDate").innerHTML = day + "\xa0";
document.getElementById("todaysMonth").innerHTML = month;

if (monthStr.toLowerCase() == "februari") {
    document.getElementById("date29").style.display = "none";
    document.getElementById("date30").style.display = "none";
    document.getElementById("date31").style.display = "none";
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