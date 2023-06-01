// Functions
const functionName = (a, b) => {
return a + b;
}

console.log(functionName(3, 4));

const dollarToNaira = (dollar) => {
    return dollar * 770
}

console.log(dollarToNaira(100));

// F = (9/5) * C + 32

const celsiusToFahrenheit = (celsuis) => {
    return celsuis * (9/5) + 32
}
console.log(celsiusToFahrenheit(2));

// Object
const car = {
    model: "BMW",
    year: 2009,
    color: "white"
}

console.log(car.color);

// String
let text = "ABCEFDTYHJKOLMAQ";
console.log(text.length);

let group = "Apple, Banana, Kiwi, Pear, Grape";
console.log(group.slice(7, 13));

let phrase = "Please destroy your Android and sell your android";
let newPhrase = phrase.replace(/android/gi, "iPhone");

console.log(newPhrase);


let sentence = "Hello World";
console.log(sentence.toUpperCase());


let space = "     hello world    ";
let trimmedSpace = space.trim();
console.log(trimmedSpace);

let set = "Apple, Orange, Banana, Mango, Kiwi, Grape";
set = set.split(", ");
console.log(set);
console.log(set.indexOf("Banana"));