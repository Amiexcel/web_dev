let input = document.getElementById("input");
let btn = document.getElementById("btn");
let text = document.getElementById("text");
btn.addEventListener("click", () => {
    // if(input.value % 2 == 0){
    //     text.innerHTML = "The number is Even";
    // } else {
    //     text.innerHTML = "The number is Odd";
    // }
    // console.log(input.value);
    if(input.value == 2 || input.value == 3 || input.value == 5 || input.value == 7){
        text.innerHTML = "This is a Prime Number";
    } else if (input.value/input.value == 1 && input.value % 2 != 0 && input.value % 3 != 0 && input.value % 5 != 0 && input.value % 7 != 0) {
        text.innerHTML = "This is a Prime Number";
    } else {
        text.innerHTML = "This is NOT a Prime Number";
    }

})