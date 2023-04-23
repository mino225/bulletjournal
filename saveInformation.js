colorNumber = 0;
colors = ["white", "rgb(255, 156, 156)", "rgb(255, 80, 80)", "rgb(179, 10, 10)", "rgb(77, 3, 3)"];

function changeColorHappiest() {
  colorNumber = 1;
}

function changeColorHappy() {
  colorNumber = 2;
}

function changeColorOk() {
  colorNumber = 3;
}

function changeColorSad() {
  colorNumber = 4;
}

function changeColorRemove() {
  colorNumber = 0;
}

function changeColor(number) {
  let changedDate = document.getElementsByClassName("dates")[number];
  changedDate.style.backgroundColor = colors[colorNumber];
  let newColor = changedDate.style.backgroundColor;
  document.cookie = "colorOf" + number + "=" + newColor;
}

function saveData(number) {
  let changedDate = document.getElementsByClassName("inputBox")[number];
  let value = changedDate.value;
  document.cookie = "writtenIn" + number + "=" + value;    
}

// funktion getCookie från https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function emptyCalender() {
  // skriver ut texten från cookies
  for(let i = 0; i < document.getElementsByClassName("inputBox").length; i++) {
    document.getElementsByClassName("inputBox")[i].value = "";
    document.cookie = "writtenIn" + i + "=" + "";
  }

  // sätter bakgrundsfärgen
  for(let i = 0; i < document.getElementsByClassName("dates").length; i++) {
    document.getElementsByClassName("dates")[i].style.backgroundColor = colors[0];
    document.cookie = "colorOf" + i + "=" + colors[0];
  }
}

// skriver ut texten från cookies
for(let i = 0; i < document.getElementsByClassName("inputBox").length; i++) {
  document.getElementsByClassName("inputBox")[i].value = getCookie("writtenIn" + i)
}

// sätter bakgroundsfärgen
for(let i = 0; i < document.getElementsByClassName("dates").length; i++) {
  document.getElementsByClassName("dates")[i].style.backgroundColor = getCookie("colorOf" + i);
}



// document.getElementsByClassName("inputBox")[0].value = getCookie("writtenIn0");
// document.getElementsByClassName("inputBox")[1].value = getCookie("writtenIn1");


// firstDate.value = encodeURIComponent(document.cookie);

// function getCookie(name) {
//     let ca = name.split(';');
//     for(let i = 0; i <ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//           c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//           return c.substring(name.length, c.length);
//         }
//       }
//       return "";
//     }


// function getCookie(name) {
//     let cookies = document.cookie.split(";");
//     for (let i = 0; i < cookies.length; i++) {
//         let cookie = cookies[i].trim();
//         if (cookie.startsWith(name + "=")) {
//             return cookie.substring(name.length + 1)
//         }
//     }
// }
// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }


// firstDate.value = getCookie(firstDate);
// firstDate.innerHTML = firstDate.value;

// let myData = getCookie("myData");
// if (myData) {
//     let textarea = document.getElementById("writeOne");
//     textarea.value = decodeURIComponent(myData);
// }
//     return null;
// }