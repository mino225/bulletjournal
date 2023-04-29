colorNumber = 0;
colors = ["white", "rgb(255, 156, 156)", "rgb(175, 117, 117)", "rgb(255, 80, 80)", "rgb(179, 10, 10)"];

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
  let textBox = document.getElementsByClassName("inputBox")[number];
  if (textBox != document.activeElement) {
    let changedDate = document.getElementsByClassName("dates")[number];
    changedDate.style.backgroundColor = colors[colorNumber];
  }
}