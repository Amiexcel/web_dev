const btn = document.querySelectorAll(".btns");
const display = document.querySelector("#display");
let displayValue = "";
let input = document.querySelector("#pin");
let newPin = document.querySelector("#newpin")

let randomPin = [];
for(let i = 0; i > 12; i++) {
    randomPin.push(Math.floor(Math.random() * 9))
}
let pin = randomPin.join("");
input.innerHTML = pin;

for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", () => {
        displayValue = displayValue + btn[i].value;
        display.value = displayValue;
    })
}