// Random Quote Generator

// globial variables used to prevent quotes and colors from displaying back to back 
let randomQuote;
let randomColor;

let colors = ["#105187","#2C8693", "#F19722", "#C33325","#36b55c"];
// Create the array of quote objects and name it quotes
let quotes = [
	{
		quote: "Kiss me, Barbara.",
		source: "Rhett and Link",
		citation: "25 Unforgettable Movie Quotes",
		year: "2012",
		tag: "Humor"
	},
	{
		quote: "We must love one another and see in one another the beauty of the soul.",
		source: "Carole F. McConkie",
		citation: "Ensign",
		year: "2015",
		tag: "Inspirational"
	},
	{
		quote: "In family relationships love is really spelled t-i-m-e, time.",
		source: "Dieter F. Uchtdorf",
		citation: "Ensign",
		year: "2010",
		tag: "Family"
	},
	{
		quote: "I like your boots.",
		source: "Rhett and Link",
		citation: "How to Talk to Girls",
		year: "2012",
		tag: "Humor"
	},
	{
		quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
		source: "Patrick McKenzie",
		citation: "Twitter",
		year: "2016",
		tag: "Inspirational"
	},
	{
		quote: "Only I can change my life. Nobody can do it for me.",
		source: "Carol Burnett",
		tag: "Inspirational"
	},
	{
		quote: "You keep using that word. I do not think it means what you think it means.",
		source: "Inigo Montoya",
		citation: "The Princess Bride",
		year: 1987,
		tag: "Humor"
	}
];

// get a random quote
function getRandomQuote(array) {
	let randomIndex = Math.floor(Math.random()* array.length);
	return array[randomIndex]; 
}

// Ensure a quote doesn't display back to back
function preventDuplicateQuote(randomQuote, array) {
	if(randomQuote === undefined) {
		return getRandomQuote(array);
	}
	let quote;
	
	do {
		quote = getRandomQuote(array);
	} while(randomQuote.quote === quote.quote);

	return quote;
}

// Build the string that will be displayed
function stringBuilder(randomQuote) {
	let output = `<p class="quote"> ${randomQuote.quote} </p>`; 
	output += `<p class="source"> ${randomQuote.source}`;	

	if (randomQuote.citation !== undefined) {
		output += `<span class="citation"> ${randomQuote.citation} </span>`;
	}
	
	if (randomQuote.year !== undefined) {
		output += `<span class="year"> ${randomQuote.year} </span>`;
	}

	if (randomQuote.tag !== undefined) {
		output += `<br><span class="tag"> Category: ${randomQuote.tag} </span> `
	}

	output += '</p>';

	return output;
}

// get a random color
function getRandomColor(array) {
	let randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

// Prevents duplicate backgrounds from displaying back to back
function preventDuplicateColor(randomColor, colorArray){
	let color;
	do {
		color = getRandomColor(colorArray);
	} while (randomColor === color);
	return color;
}

// Changes the background color
function changeBackgroundColor(colorArray) {
	randomColor = preventDuplicateColor(randomColor, colorArray);
	document.body.style.backgroundColor = randomColor;
	loadQuote.addEventListener("mouseover", function(event) {
		event.target.style.background = "#F19A28";
	}, false);
	loadQuote.addEventListener("mouseleave", function(event) {
		event.target.style.background = "";
	}, false);
}

// prints the quote and calls a function to change the background color
function printQuote(quoteArray, colorArray) {
	changeBackgroundColor(colorArray);
	randomQuote = preventDuplicateQuote(randomQuote, quoteArray);
	document.getElementById("quote-box").innerHTML = stringBuilder(randomQuote);
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", function() {
	printQuote(quotes, colors)
}, false);

// calls the printQuote function every 20 seconds if the user doesn't click for the next quote
setInterval(function(){ printQuote(quotes, colors); }, 20000);
