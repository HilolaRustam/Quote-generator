import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const quotes = [
  {
    quote: "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  {
    quote: "I should have been more kind.",
    author: "Clive James",
  },
];

function pickRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

app.get("/quotes/random", (req, res) => {
  console.error("Received a request for a quote");
  const quote = pickRandomQuote();
  res.send(`"${quote.quote}" -${quote.author}`);
});

app.post("/", (req, res) => {
  const { quote, author } = req.body;

  if (!quote || !author) {
    return res
      .status(400)
      .send("Quote and author are required");
  }

  quotes.push({
    quote,
    author,
  });

  res.send("Quote added successfully");
});

app.listen(port, () => {
  console.error(`Quote server listening on port ${port}`);
});