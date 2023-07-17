const fs = require('fs/promises');

async function getQuotes() {
  const quotes = await fs.readFile('quotes.json')
  return JSON.parse(quotes)
}

async function randomQuote() {
  const quotes = await getQuotes()
  const random = Math.floor(Math.random() * (quotes.length - 1));
  return quotes[random]
}

exports.handler = async () => {
  try {
    const quote = await randomQuote()
    return {
      statusCode: 200,
      body: JSON.stringify(quote)
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};