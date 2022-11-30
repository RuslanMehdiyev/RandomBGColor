const inputValue = document.getElementById("input");
const copyToClipboard = document.getElementById("copy");
let btn = document.querySelector(".btn");
let main = document.querySelector(".main");

let colorArr = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = "";

const getColor = () => {
  let array = [];
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * colorArr.length);
    array.push(colorArr[random]);
  }

  result = "#" + array.join("");
  main.style.backgroundColor = result;
  inputValue.setAttribute("placeholder", result);
};

btn.addEventListener("click", () => {
  getColor();
});

copyToClipboard.addEventListener("click", () => {
  let textarea = document.createElement("textarea");
  textarea.value = result;
  if (!textarea) {
    return;
  }
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("copied");
});
