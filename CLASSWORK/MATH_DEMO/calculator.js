const btn = document.querySelectorAll(".buttons");
const display = document.querySelector("#display");
const operator = document.querySelectorAll(".operators");
let displayValue = "";
let arrValue;
let firstValue;
let symbol;
let secondValue;
let Result;

//THIS MAKES BUTTONS WORK
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        //THE ALL-CLEAR BUTTON
        if (btn[i].value == "all-clear") {
            displayValue = "";
            display.value = displayValue;
            // operators[o].disabled = false;
           
        }
        //THE DELETE BUTTON
        else if (btn[i].value == "delete"){
            //converts the strings to an array
            arrValue = displayValue.split("");
            //removes the last value of the array
            arrValue.pop();
            //changes the array back to original string
            displayValue = arrValue.join("");
            display.value = displayValue;
           
        }
        //THE OPERATORS BUTTONS
        else if (btn[i].classList.contains("operators")) {
            if(displayValue == ""){
                console.error("You can't start with an operator");
            }else if(btn[i].value == "."){
                displayValue = displayValue + btn[i].value;
                display.value = displayValue;
            }else {
            if(btn[i].classList.contains("arith")){
                btn[i].classList.add("clickedOn");
                    firstValue = displayValue;
                    symbol = btn[i].value;
                    displayValue = "";
                    display.value = displayValue
                    console.log(firstValue);
                    console.log(symbol);
                }
             if(btn[i].value == "=") {
                    secondValue = displayValue;
                    console.log(secondValue);
            switch(symbol){
                 case "+":
                        Result = parseFloat(firstValue) + parseFloat(secondValue);
                    break;
                 case "-":
                        Result = parseFloat(firstValue) - parseFloat(secondValue);
                    break;
                case "*":
                        Result = parseFloat(firstValue) * parseFloat(secondValue);
                    break;
                case "/":
                        Result = parseFloat(firstValue) / parseFloat(secondValue);
                     break;

                    }
                    console.log(Result);
                    displayValue = Result.toString();
                    display.value = displayValue;
                }
        //  displayValue = displayValue + btn[i].value;
        //  display.value = displayValue;
        }
    }
        //THE NUMBER BUTTONS
        else{
        displayValue = displayValue + btn[i].value;
        display.value = displayValue;
        }
    })
}









// console.log(btn);





// let arr = ["a" , "b", "c", "d"];
// console.log(arr);
// arr.pop()
// console.log(arr);

// let stringArr = arr.join("");
// console.log(stringArr);
