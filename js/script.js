// Random Quote Generator
let randomQuote;
// Create the array of quote objects and name it quotes
let quotes = [
	{
		quote: "Kiss me, Barbra.",
		source: "Rhett and Link",
		citation: "25 Unforgettable Movie Quotes",
		year: "2012",
		tag: "humor"
	},
	{
		quote: "We must love one another and see in one another the beauty of the soul.",
		source: "Carole F. McConkie",
		citation: "Ensign",
		year: "2015",
		tag: "family"
	},
	{
		quote: "In family relationships love is really spelled t-i-m-e, time.",
		source: "Dieter F. Uchtdorf",
		citation: "Ensign",
		year: "2010",
		tag: "family"
	},
	{
		quote: "I like your boots",
		source: "Rhett and Link",
		citation: "How to Talk to Girls",
		year: "2012",
		tag: "humor"
	},
	{
		quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
		source: "Patrick McKenzie",
		citation: "Twitter",
		year: "2016",
		tag: "tech"
	}
];


// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote() {
	let random = Math.floor(Math.random()* quotes.length);
	return quotes[random]; 
}

// Unique quote
function duplicateQuotePreventor(quote) {
	let randomQuote;
	do {
		randomQuote = getRandomQuote();
	} while(quote.quote === randomQuote.quote);
	console.log(randomQuote);
	return randomQuote;
}

// Create the print the quote 
function printQuote() {
	randomQuote = duplicateQuotePreventor(randomQuote);
	let output = `<p class="quote"> ${randomQuote.quote} </p>`; 
	output += `<p class="source"> ${randomQuote.source}`;
	output += `<span class="citation"> ${randomQuote.citation} </span>`;
  output += `<span class="year"> ${randomQuote.year} </span> </p>`;
	document.getElementById('quote-box').innerHTML = output;
}

randomQuote = getRandomQuote();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);