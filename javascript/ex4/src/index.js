const startGameButton = document.getElementById("startGame");
const newCardButton = document.getElementById("newCard")
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")
let firstCard = 0
let secondCard = 0
let sum = 0
let message = "";
let hasBlackJack = false;
let isAlive = true;

startGameButton.addEventListener("click", startGame);
newCardButton.addEventListener("click", drawCard)


function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function startGame() {
	let firstCard = randomIntFromInterval(2, 11);
	let secondCard = randomIntFromInterval(2, 11);
	let message = "";
	let hasBlackJack = false;
	let isAlive = true;

	sum = firstCard + secondCard;
	newCardButton.style.visibility = "visible"
	startGameButton.textContent = "New Game"

	if (sum < 21) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "You've got Blackjack!";
		hasBlackJack = true;
	} else {
		isAlive = false;
		message = "Bad luck! You're out of the game!";
	}

	messageEl.textContent = message
	cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
	sumEl.textContent = "Sum: " + sum
	console.log("blackjack: " + hasBlackJack)
	console.log("is Alive: " + isAlive)
}

function drawCard() {
	let newCard = randomIntFromInterval(2, 11);
	sum = sum + newCard

	if (sum < 21) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "You've got Blackjack!";
		hasBlackJack = true;
	} else {
		isAlive = false;
		message = "Bad luck! You're out of the game!";
		newCardButton.style.visibility = "hidden"
	}

	messageEl.textContent = message
	cardsEl.textContent = cardsEl.textContent + " " + newCard;
	sumEl.textContent = "Sum: " + sum
	console.log("blackjack: " + hasBlackJack)
	console.log("is Alive: " + isAlive)
}
