function saveData(number) {
  let changedDate = document.getElementsByClassName("inputBox")[number];
  let value = changedDate.value;
  document.cookie = "writtenIn" + number + "=" + encodeURIComponent(value);    
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

for(let i = 0; i < 31; i++) {
  document.getElementsByClassName("inputBox")[i].value = getCookie("writtenIn" + i)
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