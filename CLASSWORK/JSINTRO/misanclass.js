// let name = prompt("What is your name?");
// if(name == "Amara"){
//     alert(name)
// } else if(name == "Justine"){
//    alert(name); 
// } else{
//     alert("Wrong name");
// }


// guess = userGuesses;
// num = randomNum;
// numOfGuesses = number of time user can guess;
// let numOfGuesses = 5
// for(i = 0; i < numOfGuesses; i++){
// let guess = parseInt(prompt("Write a number"));
// let num = 10;
// if(guess < num){
//     alert("Guess is lower than number");
// } else if(guess > num){
//     alert("Guess is greater than number");
// } else if(guess == num){
//     alert("You are correct!");
//     break;
// } else{
//     alert("input a number")
// }
// }

// let vowel = prompt("write an alphabet")
// switch(vowel){
//     case "a":
//         alert("This is a vowel");
//         break;
//     case "e":
//             alert("This is a vowel");
//             break;
//             case "i":
//                 alert("This is a vowel");
//                 break;
//                 case "o":
//                     alert("This is a vowel");
//                     break;
//                     case "u":
//                         alert("This is a vowel");
//                         break;
//                         default:
//                             alert("This is not a vowel");
// }
// alert (Date())
// let day = new Date().getDay();
// switch(day){
//     case 0:
// alert("Today is Sunday");
// break;
// case 1:
//     alert("Today is Monday");
//     break;
//     case 2:
//         alert("Today is Tuesday");
//         break;
//         case 3:
//             alert("Today is Wednesday");
//             break;
//             case 4:
//                 alert("Today is Thursday");
//                 break;
//                 case 5:
//                     alert("Today is Friday")
//                     default:
//                         alert("Today is Saturday");
//                         break;
// }


// let laptop = ["hp", "Dell", "Lenovo"];
// alert(laptop[2])
// laptop[1] = "Mac";
// alert(laptop[1])

// let person = {
//     firstname : "John",
//     gender : "Male",
//     age : 64,
//     lastname : "Mark",
// }
// alert(person.firstname);

// let name = "John";
// let surname = "Mark";

// alert(name + surname)

// console.log("Hello, World!")

// let i = 1
// while(i < 10){
//     console.log("Hi")
//     i++
// }


// let i = 1
// while(i < 10){
//     console.log(i)
//     i++
// }

// for(let i = 1; i < 10; i++){
//     console.log(i)
// }

// for(let j = 10; j > 1; j--){
//     console.log(j)
// }


const text = document.getElementById("text");
console.log(text)
text.innerHTML = "Hello"
text.style.color = "red";
text.style.margin = "12px";
text.style.fontSize = "40px";
text.style.textAlign = "center";

let para = document.createElement("p");
para.className = "Hello";