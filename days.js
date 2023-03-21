var d = new Date();
const months = ["JANUARI", "FEBRUARI", "MARS", "APRIL", "MAJ", "JUNI", "JULI", "AUGUSTI", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DECEMBER"];

let day = d.getDate();
let month = months[d.getMonth()];

document.getElementById("todaysMonth").innerHTML = month;
document.getElementById("todaysDate").innerHTML = day;

if (document.getElementById("dates").innerHTML == day) {
    document.getElementById("dates").style.backgroundColor = "red";
}