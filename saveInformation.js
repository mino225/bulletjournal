function saveData() {
    const input = document.getElementsByClassName("inputBox")[0];
    const value = input.value;
    const expiresDate = newDate();
    expiresDate.setTime(expiresDate.getTime()+ 7*24*60*60*1000);
    document.cookie = "myData=" + encodeURIComponent(value) + "; expires=" + expiresDate;
}

const myData = getCookie("myData");
if (myData) {
    const input = document.getElementsByClassName("inputBox")[0];
    input.value = decodeURIComponent(myData);
}

function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1)
        }
    }

    return null;
}
