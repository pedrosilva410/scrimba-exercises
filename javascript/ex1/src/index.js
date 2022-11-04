const counter = document.getElementById('counter');
const value = counter.value;
const adder = document.getElementById('increment')

adder.addEventListener('click', () => {
	console.log('aaaa');
	value = value = 1;
	counter.innerHTML = value;
});
