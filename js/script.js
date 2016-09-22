// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//QUOTE LIST

var quotes = [
	{
		quote: "You can do anything but not everything",
		source: "David Allen",
		citation: "Making It All Work",
		year: 2009,
		category: "Inspirational"
	},
	{
		quote: "Wait for the common sense of the morning.",
		source: "H.G. Wells",
		citation: "The Time Machine",
		year: 1895,
		category: "Humor"
	},
	{
		quote: "It's much better to do good in a way that no one knows anything about it.",
		source: "Leo Tolstoy",
		citation: "Anna Karenina",
		year: 1877,
		category: "Lifestyle"
	},
	{
		quote: "You forget what you want to remember, and you remember what you want to forget.",
		source: "Cormac McCarthy",
		citation: "The Road",
		year: 2006,
		category: "Lifestyle"
	}
];

//VARIABLES
var viewedQuotes = [];
var splicedQuote = [];
var selector;
//TIMED VAR TO SWITCH QUOTE AUTOMATICALLY EVERY 100000 MILLISECONDS
var timer = window.setInterval(printQuote, 10000);

//CHECKS VIEWED QUOTES AND SELECTS RANDOM QUOTE
function getRandomQuote() {
	if (quotes.length === 0) {
		quotes = viewedQuotes.splice(0, viewedQuotes.length);
	}
	var selector = Math.floor(Math.random() * quotes.length);
	var splicedQuote = quotes.splice(selector, 1)[0];
	viewedQuotes.push(splicedQuote);
	return splicedQuote;
}

//SELECTING A RANDOM COLOR FOR BACKGROUND AND CHANGING ON EVERY CLICK
var red;
var green;
var blue;
var rgbColor;

function color() {
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

	document.body.style.backgroundColor = rgbColor;
}

//TAKES RANDOM QUOTE AND PRINTS IT TO SCREEN
function printQuote() {
	var randomQuote = getRandomQuote();
	var html = '<p class="quote">' + randomQuote.quote + '</p>' + 
    '<p class="source">' + randomQuote.source + 
    '<span class="citation">' + randomQuote.citation + '</span>' +
	'<span class="year">' + randomQuote.year + '</span>' + 
	'<span class="category">' + randomQuote.category + '</span>' + '</p>';

	document.getElementById('quote-box').innerHTML = html;

	//RUNS COLOR CHANGE FUNCTION
	color();
}















