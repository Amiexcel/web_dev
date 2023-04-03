let guess = document.querySelector("#number")
let btn = document.querySelector("button")
let replyNum = document.querySelector("#entered")

let num;
let prime = true;


 

const isItPrime = () => {
    num = guess.value
    if(num > 100 || num < 1){
        replyNum.innerHTML = num + " exceeds the limit";
        return;
    }else if (num ==1){
        replyNum.innerHTML = num + " is not a prime number";
        return;
    }else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0){
                prime = false;
                console.log("it is divisible by " + i);
                break;
            }         
        }
        if(prime == true){
            replyNum.innerHTML = num + " is a prime number";

        }else{
            replyNum.innerHTML = num + " is not a prime number";
        }
    }
    
}


btn.addEventListener("click", isItPrime)


