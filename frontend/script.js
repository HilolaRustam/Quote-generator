
async function displayRandomQuote() {
  const response = await fetch ("http://localhost:3000/quotes/random");
  const randomQuote = await response.json ();
  document.getElementById("quote-text").innerText = `"${randomQuote.quote}"`;
  document.getElementById("quote-author").innerText = `– ${randomQuote.author}`;
}



// Display a new quote when the button is clicked
document.getElementById("new-quote").addEventListener("click", displayRandomQuote);// Display a quote when the page loads

window.onload = displayRandomQuote;

document
  .getElementById("quote-form")
  .addEventListener("submit", async function (event) {

    event.preventDefault();

    const quoteText =
      document.getElementById("new-quote-text").value;

    const quoteAuthor =
      document.getElementById("new-quote-author").value;
    const response =await fetch("http://localhost:3000/",
        { method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                quote:quoteText,
                author: quoteAuthor,
            }),
            }
        );
    if (response.ok) {
        displayRandomQuote();
        document
            .getElementById("quote-form")
            .reset();
         
        document 
            .getElementById("quote-form")
            .classList.add("hidden");  
    }    
});

document
  .getElementById("show-form-btn")
  .addEventListener("click", function () {

    document
      .getElementById("quote-form")
      .classList.remove("hidden");

});