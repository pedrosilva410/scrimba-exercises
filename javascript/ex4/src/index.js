function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const firstCard = randomIntFromInterval(2, 11);
const secondCard = randomIntFromInterval(2, 11);
let message = "";
let hasBlackJack = false
let isAlive = true



const sum = firstCard + secondCard;

console.log(sum);

if (sum < 21) {
	message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
	message = "Wohoo! You've got Blackjack! 🥳"
	hasBlackJack = true
} else {
	isAlive = false;
	message = "Bad luck! You're out of the game! 😭"
}

// CASH OUT!
console.log(message);
console.log("blackjack: " + hasBlackJack)
console.log("is Alive: " + isAlive)
