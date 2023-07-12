"use strict";

//# Level_1_3

const cardList = document.querySelectorAll(".card");
console.log(cardList);

const changeColor = (event) => {
  event.target.style.backgroundColor = "#000";
  event.target.style.color = "#fff";
};

cardList.forEach((card) => {
  card.addEventListener("click", changeColor);
});

//# Level_1_4

const eventParagraph = document.querySelector(".event_paragraph");

eventParagraph.addEventListener("click", (event) => {
  console.log("Du hast auf den Event-Paragraphen geklickt.");
});

//# Level_1_5

const clickCountBtn = document.querySelector("#click-me");

let count = 0;

clickCountBtn.addEventListener("click", (event) => {
  count++;
  event.target.textContent = `Click me: ${count}`;
});

//# Level_1_6

const selectInput = document.querySelector("#my-select");
const selectOutput = document.querySelector("#option-selected");

selectInput.addEventListener("change", (event) => {
  selectOutput.textContent = `Sie haben ausgewählt ${event.target.value}`;
});

//# Level_2_1

const colorBtns = document.querySelectorAll("#umschalter li");

const changeBgc = (event) => {
  // console.time("test");
  document.body.style.background = event.target.dataset.bgc;

  if (event.target.dataset.color !== undefined) {
    document.body.style.color = event.target.dataset.color;
  } else {
    document.body.style.color = "#000";
  }
  // console.timeEnd("test");
};

colorBtns.forEach((btn) => {
  btn.addEventListener("click", changeBgc);
});

//# Level_2_2

const heading = document.querySelector(".header");
const keyOut = document.querySelector(".key_out");
const keyCodeOut = document.querySelector(".key_code_out");
const codeOut = document.querySelector(".code_out");

document.body.addEventListener("keypress", (event) => {
  heading.textContent = event.keyCode;
  keyOut.textContent = event.key;
  keyCodeOut.textContent = event.keyCode;
  codeOut.textContent = event.code;
});

//# Level_3_1

const dynamicColor = document.querySelector(".dynamic_color_change");
const rangeInputs = document.querySelectorAll("input[type='range']");
const colorBtns2 = document.querySelectorAll(".changeBgcBtn");
const outputText = document.querySelector("#demo");

const rangeRed = document.querySelector("#rot");
const rangeGreen = document.querySelector("#grun");
const rangeBlue = document.querySelector("#blau");
let counter = 0;

const changeRange = () => {
  counter++;
  dynamicColor.style.backgroundColor = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`;
  outputText.textContent = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})=#${Number(
    rangeRed.value
  ).toString(16)}${Number(rangeGreen.value).toString(16)}${Number(rangeBlue.value).toString(16)}`;
};

const changeBtn = (event) => {
  counter++;
  dynamicColor.style.backgroundColor = event.target.value;
  outputText.textContent = `Wir haben die Farbe ${counter} mal geändert!`;
};

rangeInputs.forEach((range) => {
  range.addEventListener("change", changeRange);
});

colorBtns2.forEach((btn) => {
  btn.addEventListener("click", changeBtn);
});
