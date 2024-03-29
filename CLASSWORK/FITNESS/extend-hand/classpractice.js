// function menu(){
//     console.log("Hello World!");
// }
// menu();

// OR

// const menu = () => {
//     console.log("Hello World!");
// }
// menu();

// const main_btn = document.querySelector("#main-button");
// main_btn.addEventListener('click', () => {
//     console.log("Button works");
// })




const main_btn = document.querySelector("#main-button");
const modal = document.querySelector('#modal');
const modal_button = document.querySelector("#modal_button");

const openModalFunc = () => {
    modal.classList.add("show");
}

main_btn.addEventListener('click', openModalFunc);

const closeModalFunc = () => {
    modal.classList.remove("show");
}

modal_button.addEventListener('click', closeModalFunc);

const burger = document.querySelector('#burger');
const navigation = document.querySelector('#navigation');

const burgerTap = () => {
    navigation.classList.toggle("show")
    burger.classList.toggle("color");
}
burger.addEventListener('click', burgerTap);