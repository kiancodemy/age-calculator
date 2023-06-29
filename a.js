const yearinput = document.querySelector("#year");
const monthinput = document.querySelector("#month");
const dayinput = document.querySelector("#day");
const formsub = document.querySelector(".form");
let getyear = new Date().getFullYear();

console.log(getyear);
const submitt = function (e) {
  e.preventDefault();
  console.log(typeof monthinput.value);
  if (!yearinput.value || !monthinput.value || !dayinput.value) {
    alert("fill all the sections");
  } else if (yearinput.value > getyear) {
    alert("you have entered the wrong year");
  } else if (+monthinput.value > 12 || +monthinput.value < 1) {
    alert("choose the right month please ");
  } else if (+dayinput.value > 31 || +dayinput.value < 1) {
    alert("choose the right day please ");
  }
};
formsub.addEventListener("submit", submitt);
