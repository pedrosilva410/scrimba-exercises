const startGameButton = document.getElementById("startGame");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")

startGameButton.addEventListener("click", startGame);


function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function startGame() {
	const firstCard = randomIntFromInterval(2, 11);
	const secondCard = randomIntFromInterval(2, 11);
	const sum = firstCard + secondCard;
	let message = "";
	let hasBlackJack = false;
	let isAlive = true;

	console.log(sum);

	if (sum < 21) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "You've got Blackjack!";
		hasBlackJack = true;
	} else {
		isAlive = false;
		message = "Bad luck! You're out of the game!";
	}

	// CASH OUT!
	messageEl.textContent = message
	sumEl.textContent = "Sum: " + sum
	cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
	console.log("blackjack: " + hasBlackJack)
	console.log("is Alive: " + isAlive)
}

