var quotes = ["quote 1", "quote 2", "quote 31"];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

newQuote();
