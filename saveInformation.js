// let firstDateValue;
let firstDate = document.getElementById("writeOne");

function saveData() {
    firstDate.style.backgroundColor = "red";
    let value = firstDate.innerText;
    document.cookie = "writtenInFirst=" + encodeURIComponent(value);    
}

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

firstDate.innerText = getCookie("writtenInFirst");

// function getCookie(cookieName) {
//     let name = cookieName.split("=");
//     alert(name[1]);
//     return name[1];
// }

let firstDate = document.getElementById("writeOne");
firstDate.value = getCookie(firstDateValue);
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