let player = "firstPlayer";
const reset = document.querySelector("#reset");
const btn = document.querySelectorAll(".btn");
let result = document.querySelector(".result");
result.innerHTML = "First Player's Turn";
result.style.color = "white";

let FirstPlayerMoves = [];
let SecondPlayerMoves = [];

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", () => {
        if(player == "firstPlayer"){
            btn[i].style.background = "white";
            FirstPlayerMoves.push(i);
            console.log(FirstPlayerMoves);
            player = "secondPlayer";
            result.innerHTML = "Second Player's Turn";
            result.style.color = "hotpink";
        } else {
            btn[i].style.background = "black";
            SecondPlayerMoves.push(i);
            console.log(SecondPlayerMoves);
            player = "firstPlayer";
            result.innerHTML = "First Player's Turn";
            result.style.color = "white";
        }
        reset.addEventListener("click", () => {
            btn[i].style.background = "#90b9ee";
            player = "firstPlayer";
        })
    })
}
