// Parte 1
const addition = function (amountOne, amountTwo, amountThree) {
  return amountOne + amountTwo + amountThree;
};
const amountOne = document.querySelector("#amountOne");
const amountTwo = document.querySelector("#amountTwo");
const amountThree = document.querySelector("#amountThree");
const buttonExample = document.querySelector("#buttonExample");
const resultExample = document.querySelector("#resultExample");

buttonExample.addEventListener("click", () => {
  console.log("me diste click");
  const amountClientOne = +amountOne.value;
  const amountClientTwo = +amountTwo.value;
  const amountClientThree = +amountThree.value;
  const amountExample = addition(
    amountClientOne,
    amountClientTwo,
    amountClientThree
  );
  resultExample.innerHTML = `<b>El resultado fue: ${amountExample}</b>`;
});
// Parte 2
const multiplication = (numberOne, numberTwo) => numberOne * numberTwo;
const numberOne = document.querySelector("#numberOne");
const numberTwo = document.querySelector("#numberTwo");
const buttonCalculate = document.querySelector("#buttonCalculate");
const result = document.querySelector("#result");

buttonCalculate.addEventListener("click", () => {
  console.log("me diste click");
  const calculateOne = +numberOne.value;
  const calculateTwo = +numberTwo.value;
  const amount = multiplication(calculateOne, calculateTwo);
  result.innerHTML = `<b>El resultado fue: ${amount}</b>`;
});
// Parte 3
const element = document.querySelector("#ele1");
element.setAttribute("style", "background-color: green");
const paint = function (setColor, color) {
  setColor.style.backgroundColor = color;
};
element.addEventListener("click", () => paint(element, "yellow"));

// Parte 4
const green = document.querySelector("#green");
green.setAttribute("style", "background-color: green");
const yellow = document.querySelector("#yellow");
yellow.setAttribute("style", "background-color: yellow");
const red = document.querySelector("#red");
red.setAttribute("style", "background-color: red");
const blue = document.querySelector("#blue");
blue.setAttribute("style", "background-color: blue");

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    colorselect = "black";
    return;
  } else if (event.key === "s") {
    colorselect = "blueviolet";
    return;
  } else if (event.key === "d") {
    colorselect = "tomato";
    return;
  }
});
function changeColor(event) {
  const change = event.target;
  change.style.background = colorselect;
}
green.addEventListener("click", changeColor);
yellow.addEventListener("click", changeColor);
red.addEventListener("click", changeColor);
blue.addEventListener("click", changeColor);
