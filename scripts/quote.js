
// Get Quotes From API
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const norrisBtn = document.getElementById('norris');

let apiQuotes = [];

// Loading Spinner Shown
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Remove Loading Spinner
function complete() {
if (!loader.hidden) {
  quoteContainer.hidden = false;
  loader.hidden = true;
}
}

function updateQuote(quote) {
    // Check if Author field is blank and replace it with 'Unknown'
    if (!quote.author) {
      authorText.textContent = 'Unknown';
    } else {
      authorText.textContent = quote.author;
    }
  
    // Check Quote length to determine styling
    if (quote.text.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    complete();
  }

function newQuote(button) {
  loading();
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  updateQuote(quote);
  
  }

async function norrisQuote() {
  loading();
    const norrisApi = 'https://api.chucknorris.io/jokes/random';
  
    try {
      const response = await fetch(norrisApi);
      const norrisData = await response.json();
      const norrisQuote = {
        text: norrisData.value,
        author: 'The Universe',
      };
      updateQuote(norrisQuote);
    } catch (error) {
      console.error(error);
    }
  }

async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

 

// On Load
printBtn();
getQuotes();
