let counter = 0
const counterTag = document.getElementById("counterTag")

document.getElementById("add").addEventListener("click", adder)
document.getElementById("save").addEventListener("click", saver)

function adder() {
	counter += 1;
	counterTag.innerHTML = counter
}

function saver() {
	document.getElementById("entries").innerHTML = entries.innerHTML + counter + " - "
	counter = 0;
	counterTag.innerHTML = 0;
};
