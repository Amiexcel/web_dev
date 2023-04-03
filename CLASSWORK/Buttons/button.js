const btn = document.querySelectorAll(".btn");
const text = document.querySelector("#text");
// console.log(btn);

// for(let i = 0; i < btn.length; i++){
    // btn[i].addEventListener('click', () => {
    //     text.innerHTML = btn[i].value;
    // })
// }
        
    //    OR

btn[0].addEventListener('click', () => {
    text.innerHTML = btn[0].value;
})
btn[1].addEventListener('click', () => {
    text.innerHTML = btn[1].value;
})
btn[2].addEventListener('click', () => {
    text.innerHTML = btn[2].value;
})
btn[3].addEventListener('click', () => {
    text.innerHTML = btn[3].value;
})
btn[4].addEventListener('click', () => {
    text.innerHTML = btn[4].value;
})