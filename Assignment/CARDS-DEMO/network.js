const btn = document.querySelectorAll(".btns");
const display = document.querySelector("#display");
let displayValue = "";
let displayPin = document.querySelector("#pin");
let newPin = document.querySelector("#newpin");
let pin;
let phoneClick = document.querySelector("#image-click");

let randomPin = [];
newPin.addEventListener('click', () => {
    randomPin = [];
    for(let i = 0; i < 12; i++) {
        randomPin.push(Math.floor(Math.random() * 9))
    }
    pin = randomPin.join("");
    console.log(pin);
    displayPin.innerHTML = pin;
})


for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", () => {
        displayValue = displayValue + btn[i].value;
        display.value = displayValue;
    })  
}
phoneClick.addEventListener("click", () => {
    if (pin == displayValue) {
console.log ("Sucessful");
    }
})

