var quotes = ["https://ham.com", "https://google.com", "https://bing.com"];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

newQuote();
