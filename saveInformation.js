function saveData() {
    let textarea = document.getElementById("writeOne");
    textarea.style.backgroundColor = "red";
    let value = textarea.value;
    // let expiresDate = newDate();
    // expiresDate.setTime(expiresDate.getTime()+ 7*24*60*60*1000);
    document.cookie = "writtenInFirst=" + encodeURIComponent(value);
    
}

// function getCookie(name) {
//     let cookies = document.cookie.split(";");
//     for (let i = 0; i < cookies.length; i++) {
//         let cookie = cookies[i].trim();
//         if (cookie.startsWith(name + "=")) {
//             return cookie.substring(name.length + 1)
//         }
//     }
// }


let firstDate = document.getElementById("writeOne");
firstDate.value = encodeURIComponent(document.cookie);

// firstDate.value = getCookie(firstDate);
// firstDate.innerHTML = firstDate.value;

// let myData = getCookie("myData");
// if (myData) {
//     let textarea = document.getElementById("writeOne");
//     textarea.value = decodeURIComponent(myData);
// }
//     return null;
// }