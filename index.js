// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var img1 = document.querySelector(".img1");
// var img2 = document.querySelector(".img2");

// switch (randomNumber1) {
//     case 1:
//         img1.src = "images/dice1.png";
//         break;
//     case 2:
//         img1.src = "images/dice2.png";
//         break;
//     case 3:
//         img1.src = "images/dice3.png";
//         break;
//     case 4:
//         img1.src = "images/dice4.png";
//         break;
//     case 5:
//         img1.src = "images/dice5.png";
//         break;
//     case 6:
//         img1.src = "images/dice6.png";
//         break;

//     default:
//         break;
// }

// switch (randomNumber2) {
//     case 1:
//         img2.src = "images/dice1.png";
//         break;
//     case 2:
//         img2.src = "images/dice2.png";
//         break;
//     case 3:
//         img2.src = "images/dice3.png";
//         break;
//     case 4:
//         img2.src = "images/dice4.png";
//         break;
//     case 5:
//         img2.src = "images/dice5.png";
//         break;
//     case 6:
//         img2.src = "images/dice6.png";
//         break;

//     default:
//         break;
// }

// var head = document.querySelector("h1");
// if (randomNumber1 > randomNumber2) head.textContent = "🚩 Player 1 Wins !";
// else if (randomNumber2 > randomNumber1) head.textContent = "Player 2 Wins ! 🚩";
// else head.textContent = "Draw!!";


// ALTERNATE:

// creating random number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// defining source wrt to random number
var diceImageSource1 = "images/dice" + randomNumber1 + ".png";
var diceImageSource2 = "images/dice" + randomNumber2 + ".png";

// getting images from document
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

// modifying images
image1.setAttribute("src", diceImageSource1);
image2.setAttribute("src", diceImageSource2);

// changing heading

// getting heading from document
var head = document.querySelector("h1");

// condition
if (randomNumber1 > randomNumber2) head.textContent = "🚩 Player 1 Wins !";
else if (randomNumber2 > randomNumber1) head.textContent = "Player 2 Wins ! 🚩";
else head.textContent = "Draw!!";