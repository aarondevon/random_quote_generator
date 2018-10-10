// Random Quote Generator
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
		quote: "I like your boots.",
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
	},
	{
		quote: "Only I can change my life. Nobody can do it for me.",
		source: "Carol Burnett"
	},
	{
		quote: "You keep using that word. I do not think it means what you think it means.",
		source: "Inigo Montoya",
		citation: "The Princess Bride",
		year: 1987
	}
];

// get a random quote
function getRandomQuote() {
	let random = Math.floor(Math.random()* quotes.length);
	return quotes[random]; 
}

// Ensure a quote doesn't display back to back
function preventDuplicateQuote(quote) {
	let randomQuote;
	do {
		randomQuote = getRandomQuote();
	} while(quote.quote === randomQuote.quote);
	console.log(randomQuote);
	return randomQuote;
}

// Build the string that will be displayed
function stringBuilder(randomQuote) {
	let output = `<p class="quote"> ${randomQuote.quote} </p>`; 
	output += `<p class="source"> ${randomQuote.source}`;	

	if (randomQuote.citation !== undefined) {
		output += `<span class="citation"> ${randomQuote.citation} </span>`;
	}
	
	if (randomQuote.year !== undefined) {
		output += `<span class="year"> ${randomQuote.year} </span> </p>`;
	}

	output += '</p>';

	return output;
}

// get a random color
function getRandomColor() {
	let randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}

// Prevents duplicate backgrounds from displaying back to back
function preventDuplicateColor(color){
	let randomColor;
	do {
		randomColor = getRandomColor();
	} while (color === randomColor);
	return randomColor;
}

// Changes the background color
function changeBackgroundColor() {
	randomColor = preventDuplicateColor(randomColor);
	document.body.style.backgroundColor = randomColor;
	loadQuote.addEventListener("mouseover", function(event) {
		event.target.style.background = "#F19A28";
	}, false);
	loadQuote.addEventListener("mouseleave", function(event) {
		event.target.style.background = "";
	}, false);
}

// Create the print the quote 
function printQuote() {
	changeBackgroundColor();
	randomQuote = preventDuplicateQuote(randomQuote);
	document.getElementById("quote-box").innerHTML = stringBuilder(randomQuote);
}

randomQuote = getRandomQuote();
randomColor = getRandomColor();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// calls the printQuote function every 20 seconds if the user doesn't click for the next quote
setInterval(function(){ printQuote(); }, 12000);
