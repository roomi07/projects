var player1Score = Math.floor(Math.random() * 6) + 1;
var player2Score = Math.floor(Math.random() * 6) + 1;
console.log(player1Score)
console.log(player2Score)
if(player1Score === player2Score){
    document.querySelector(".header").innerHTML = "Draw";
}
else if(player1Score > player2Score){
    document.querySelector(".header").innerHTML = "Player 1 Won";
}
else{
    document.querySelector(".header").innerHTML = "Player 2 Won";
}


var player1Dice = document.querySelector(".dice-container1 img");
var player2Dice = document.querySelector(".dice-container2 img");
player1Dice.setAttribute("src", "./images/dice" + player1Score + ".png");
player2Dice.setAttribute("src", "./images/dice" + player2Score + ".png");
