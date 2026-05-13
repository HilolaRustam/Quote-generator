import{ quotes } from "./quotes.js";

function pickFromArray(choices) {
  return choices[
    Math.floor(Math.random() * choices.length)
  ];
}

function displayRandomQuote() {
  const randomQuote = pickFromArray(quotes);
  document.getElementById("quote-text").innerText = `"${randomQuote.quote}"`;
  document.getElementById("quote-author").innerText = `– ${randomQuote.author}`;
}



// Display a new quote when the button is clicked
document.getElementById("new-quote").addEventListener("click", displayRandomQuote);// Display a quote when the page loads

window.onload = displayRandomQuote;

document
  .getElementById("quote-form")
  .addEventListener("submit", function (event) {

    event.preventDefault();

    const quoteText =
      document.getElementById("new-quote-text").value;

    const quoteAuthor =
      document.getElementById("new-quote-author").value;

    const newQuote = {
      quote: quoteText,
      author: quoteAuthor,
    };

    quotes.push(newQuote);

    displayRandomQuote();

    document.getElementById("quote-form").reset();
    document
  .getElementById("quote-form")
  .classList.add("hidden");
});
document
  .getElementById("show-form-btn")
  .addEventListener("click", function () {

    document
      .getElementById("quote-form")
      .classList.remove("hidden");

});