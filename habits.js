var d = new Date();
const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
const weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

let day = d.getDate();
let dayStr = day.toString();
let month = months[d.getMonth()];
let monthStr = month.toString();
let weekday = weekdays[d.getDay()];
let dates = document.getElementsByClassName("dates");

const colors = ["lavender", "coral", "lightgreen"];

function addHabitToDay(calender, number) {
    let markedDay = document.getElementsByClassName("datesHabits")[calender*31 + number];
    if (markedDay.style.backgroundColor != colors[calender]) {
        markedDay.style.backgroundColor = colors[calender];
    } else {
        markedDay.style.backgroundColor = "rgb(255, 255, 255)";
    }
    
}

for (let i = 0; i < document.getElementsByClassName("habitColor").length; i++) {
    document.getElementsByClassName("habitColor")[i].style.backgroundColor = colors[i];
}

let firstDateOfMonth = day % 7
let firstWeekdayOfMonth = d.getDay() - firstDateOfMonth;
if (firstWeekdayOfMonth < 0) {
    firstWeekdayOfMonth += 7;
}

for (let i = 0; i < document.getElementsByClassName("daysHabits").length; i++) {
    let day29 = document.getElementsByClassName("date29")[i];
    let day30 = document.getElementsByClassName("date30")[i];
    let day31 = document.getElementsByClassName("date31")[i];

    if (firstWeekdayOfMonth == 7) {
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

for (let i = 0; i < dates.length; i++) {
    if (dates[i].innerHTML.startsWith(dayStr + " ") == true) {
        dates[i].style.fontWeight = 'bold';
    }
}
