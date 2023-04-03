// let text = "How are you doing today?";
// const splitText = text.split("o");
// console.log(splitText)


// let name = prompt("Enter your full name");
// // let text = "Amara Atuchukwu";
// const splitText = name.split(" ");
// const firstName = splitText[0];
// const surName = splitText[1];
// if(firstName == "Amara"){
// console.log(`first name = ${firstName}, last name = ${surName}`)
// }else{
//     alert("Wrong user");
// }


// let text = "Misan started the class today with many class activities";
// const splitText = text.split("");
// console.log(splitText);
// // let vowel = ("a, o, i, u, e");
// // let numOfVowels = "number of vowels in text";
// let numOfVowels = 0;
// for(i = 0; i < splitText.length; i < i++){
//     switch(splitText[i]) {
//         case "a":
//             numOfVowels++
//             break;
//         case "e":
//             numOfVowels++
//             break;
//         case "i":
//             numOfVowels++
//             break;
//         case "o":
//             numOfVowels++
//             break;
//         case "u":
//             numOfVowels++
//             break;
//     }
// }
//  console.log(numOfVowels);

let text = prompt("Write a sentence");
let splitText = text.split("");
let numOfVowels= 0;

for (let i = 0; i < splitText.length; i++){
    switch(splitText[i]) {
        case "a":
            numOfVowels++;
         break;
        case "e":
            numOfVowels++;
         break;
        case "i":
             numOfVowels++;
         break;
        case "o":
            numOfVowels++;
          break;
        case "u":
            numOfVowels++;
          break;
            }
            console.log(`Number of vowels in the statement is ${numOfVowels}`);
}