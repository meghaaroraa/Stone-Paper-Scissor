var randomNumber1 = Math.floor(Math.random() * 3);
// console.log(randomNumber1);

const values = ["stone", "paper", "scissor"];

document.querySelector(".img1").src = "./images/" + values[randomNumber1] + ".png";

var randomNumber2 = Math.floor(Math.random() * 3);
document.querySelector(".img2").src = "./images/" + values[randomNumber2] + ".png";

var player1 = values[randomNumber1];
var player2 = values[randomNumber2];

if(player1 == "stone" && player2 == "paper"){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}

else if(player1 == "stone" && player2 == "scissor"){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

else if(player1 == "paper" && player2 == "stone"){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}

else if(player1 == "paper" && player2 == "scissor"){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

else if(player1 == "scissor" && player2 == "paper"){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}

else if(player1 == "scissor" && player2 == "stone"){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

else{
    document.querySelector("h1").innerHTML = "Draw";
}

// if(randomNumber1 > randomNumber2){
//     document.querySelector("h1").innerHTML = "Player 1 wins";
// }

// else if(randomNumber2 > randomNumber1){
//     document.querySelector("h1").innerHTML = "Player 2 wins";
// }

// else{
//     document.querySelector("h1").innerHTML = "Draw";
// }