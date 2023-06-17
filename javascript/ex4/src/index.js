function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const firstCard = randomIntFromInterval(2, 11);
const secondCard = randomIntFromInterval(2, 11);
let hasBlackJack = false


const sum = firstCard + secondCard;

console.log(sum);

if (sum < 21) {
	console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
	console.log("Wohoo! You've got Blackjack! 🥳")
	hasBlackJack = true
} else {
	console.log("Bad luck! You're out of the game! 😭")
}

// CASH OUT!
console.log(hasBlackJack)
