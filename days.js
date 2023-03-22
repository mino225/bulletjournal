
var d = new Date();
const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
const weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

let day = d.getDate();
let month = months[d.getMonth()];
let weekday = weekdays[d.getDay()-1];

document.getElementById("todaysWeekday").innerHTML = weekday + "\xa0";
document.getElementById("todaysDate").innerHTML = day + "\xa0";
document.getElementById("todaysMonth").innerHTML = month;

if (month == "Februari") {
    document.getElementsByClassName("29").innerHTML = "-";
    document.getElementsByClassName("30").innerHTML = "-";
    document.getElementsByClassName("31").innerHTML = "-";
    //alert("h")
}

else if (month == "April" || month == "Juni" || month == "September" || month == "November") {
    document.getElementsByClassName("31").innerHTML = "-";
    //alert("g")
}

// if (document.getElementById("dates").innerHTML == day) {
//     document.getElementById("dates").style.backgroundColor = "red";
// }

// if (document.getElementById("weekdays").innerHTML == weekday.toLowerCase()) 
// {
//     document.getElementById("weekdays").style.backgroundColor = "red";
// }