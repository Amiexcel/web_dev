//(parameter)
//function definition
function nose(gas) {
    let message = "Breathing in " + gas;

    if (gas === "oxygen" || gas === "air"){
        message += "is good for your health";
        console.log(message);}
        else{
            message += "is bad for your health";
            console.log(message);
        }
}

//call the function or invoke
nose("hydrogen");
nose("oxygen");
nose("carbon");
nose("air");


// LIST

// ARRAY
const myList = ["home","" , "school", "hospital", "church", "mosque"];
myList[1] = "work"
console.log(myList.slice(1, 4));

// PROPERTY
const car = { myCar: "Saturn", special: "sales", model: "GLK"};
car.model 
let model = car.model
alerta(model);