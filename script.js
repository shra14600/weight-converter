const calcBtn = document.querySelector("#calc-btn");
const input = document.querySelector("#input");
const output = document.querySelector("#output");
function calcWeight() {
  let kgw = input.value / 1000.0;
  output.innerText = kgw + " Kg";
}
input.addEventListener("input", () => calcWeight());
