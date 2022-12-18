// Step 1) initialize the count as 0
// Step 2) listen for clicks on increment button
// Step 3) increment count variable when button is clicked
// Step 4) change the count-el in the HTML to reflect the new count

// Initialize count
let count = 0;

// Incrementing function
function increment() {
	count = count + 1;
	document.getElementById("count-el").innerText = count;
	console.log(count);
}

increment();

// Decrementing function
function decrement() {
	count = count - 1;
	document.getElementById("count-el").innerText = count;
	console.log(count);
}

decrement();

// creating save button

function save() {
	console.log(count);
}

save();
