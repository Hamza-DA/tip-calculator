const options = document.querySelectorAll(".option");
const Amount = document.querySelector(".amount");
const result = document.querySelector(".result");
const copiedAlert = document.querySelector(".copied-alert");
const customInput = document.querySelector(".custom-input");
const calculateBtn = document.querySelector(".calculate");

let customPer;
let amount = 0;
let datavalue = 0;
// Amount.value = '';

options.forEach((option) => {
  option.addEventListener("click", () => {
    let value = parseInt(option.getAttribute("data-value"));
    datavalue = value;
    // Amount.value = '';
  });
});

customInput.addEventListener("input", (e) => {
  customPer = e.target.value;
});

Amount.addEventListener("input", (e) => {
  amount = e.target.value;
});

let calculate = () => {
  let num;
  if (customPer == undefined || customPer == "") {
    num = datavalue;
    // console.log(num);
  } else {
    num = customPer;
    // console.log(num);
  }
  let newValue = amount * (1 + num / 100);
  // result.value = `${customPer || datavalue}% ${newValue}`
  result.value = `${customPer || datavalue}% ${newValue}`;
  customInput.value = "";
  customPer = "";
};
calculateBtn.addEventListener("click", calculate);

result.addEventListener("click", () => {
  copiedAlert.style.visibility = "visible";
  setTimeout(() => {
    copiedAlert.style.visibility = "hidden";
  }, 1000);
  result.select();
  document.execCommand("copy");
});
