var Player1 = 0
var Player2 = 0
var Player1Name = prompt("Who is Player 1?");
var Player2Name = prompt("Who is Player 2?");

function play() 
{var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 " + Player1Name + " Wins!";
  Player1 += 1
  document.querySelector(".P1").innerHTML = Player1Name+": " + Player1 
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 " + Player2Name + " Wins!";
  Player2 += 1
  document.querySelector(".P2").innerHTML = Player2Name+": " + Player2 
} 
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
document.querySelector(".p1").innerHTML = Player1Name
document.querySelector(".p2").innerHTML = Player2Name
}