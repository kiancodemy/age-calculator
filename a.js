const yearinput = document.querySelector("#year");
const monthinput = document.querySelector("#month");
const dayinput = document.querySelector("#day");
const formsub = document.querySelector(".form");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
let getyear = new Date().getFullYear();
let getmonth = new Date().getMonth();
let getday = new Date().getDay();

console.log(getyear);
const submitt = function (e) {
  e.preventDefault();

  if (!yearinput.value || !monthinput.value || !dayinput.value) {
    dayinput.value = "";
    yearinput.value = "";
    monthinput.value = "";
    alert("fill all the sections");
  } else if (
    (+yearinput.value === getyear && +monthinput.value > getmonth) ||
    (+monthinput.value === getmonth && +dayinput.value > getday)
  ) {
    alert("you entered a wrong date which is belong to future😂");
    dayinput.value = "";
    yearinput.value = "";
    monthinput.value = "";
  } else if (yearinput.value > getyear || +yearinput.value < 1900) {
    dayinput.value = "";
    yearinput.value = "";
    monthinput.value = "";
    alert("you have entered the wrong year");
  } else if (+monthinput.value > 12 || +monthinput.value < 1) {
    dayinput.value = "";
    yearinput.value = "";
    monthinput.value = "";
    alert("choose the right month please ");
  } else if (+dayinput.value > 30 || +dayinput.value < 1) {
    dayinput.value = "";
    yearinput.value = "";
    monthinput.value = "";
    alert("choose the right day please ");
  } else {
    let finalyear = getyear - Number(yearinput.value);
    let finalmonth = getmonth - Number(monthinput.value);
    let finalday = getday - Number(dayinput.value);
    console.log(getyear, getmonth, getday);
    console.log(finalyear, finalmonth, finalday);
    if (finalmonth < 0) {
      finalyear--;
      finalmonth = 12 + finalmonth;
    }
    if (finalday < 0) {
      finalmonth--;
      finalday = 30 + finalday;
    }
    dayinput.value = "";
    yearinput.value = "";
    monthinput.value = "";

    one.textContent = finalyear;
    two.textContent = finalmonth;
    three.textContent = finalday;
  }
};
formsub.addEventListener("submit", submitt);
