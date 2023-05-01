// definierar färgerna

// färgen från början är vit
colorNumber = 0;

// lista med alla färger för humör
colors = ["white", "rgb(255, 156, 156)", "rgb(175, 117, 117)", "rgb(255, 80, 80)", "rgb(179, 10, 10)"];

// ändrar färgen som musen klickar med
// beroende på vilket element du tryckte på blir värdet på color olika
function changeColorOnClick(color) {
  colorNumber = color;
}

// ändrar färgen på dagen du klickar på
function changeColor(number) {
  // definerar textrutan i rutan du klickat på
  let textBox = document.getElementsByClassName("inputBox")[number];
  
  // om du har inte har klickat på textrutan
  if (textBox != document.activeElement) {
    // definierar rutan du klickat på
    let changedDate = document.getElementsByClassName("dates")[number];

    // ändrar färgen på rutan
    changedDate.style.backgroundColor = colors[colorNumber];
  }
}