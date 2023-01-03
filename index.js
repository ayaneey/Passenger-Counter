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

let saveEl = document.getElementById("previous-entries");

function save() {
	let countStr = count + " - ";
	// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
	// 3. Render the variable in the saveEl using innerText
	saveEl.textContent += countStr;
	// NB: Make sure to not delete the existing content of the paragraph
	console.log(count);
}

save();
