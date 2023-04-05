let firstDateValue;

function saveData() {
    let textarea = document.getElementById("writeOne");
    textarea.style.backgroundColor = "red";
    let value = textarea.value;
    // let expiresDate = newDate();
    // expiresDate.setTime(expiresDate.getTime()+ 7*24*60*60*1000);
    
    firstDateValue = "writtenInFirst=" + encodeURIComponent(value);
    let firstDate = document.getElementById("writeOne");

    document.cookie = getCookie(firstDateValue);
    // firstDate.value = getCookie(firstDateValue);
    
    // document.cookie = "writtenInFirst=" + encodeURIComponent(value);
    
}

function getCookie(cookieName) {
    let name = cookieName.split("=");
    alert(name[1]);
    return name[1];
}

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