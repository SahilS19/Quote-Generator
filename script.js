const quotes = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    quote: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomIndex];

  const quoteText = `"${selected.quote}"`;
  const quoteAuthor = `– ${selected.author}`;

  document.getElementById("quote").textContent = quoteText;
  document.getElementById("author").textContent = quoteAuthor;

  const tweet = encodeURIComponent(`${selected.quote} — ${selected.author}`);
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweet}`;
  document.getElementById("shareBtn").href = tweetUrl;
}

// Initial quote on page load
window.onload = generateQuote;
