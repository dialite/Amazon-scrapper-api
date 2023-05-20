const express = require("express");
const res = require("express/lib/response");
const request = require("request-promise");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = process.env.API_KEY;
const baseURL = `http://api.scraperapi.com/?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Amazon scraper API");
});

// GET PRODUCT DETAILS
app.get("/product/:productId", async (req, res) => {
  const { productId } = req.params;

  try {
    const response = await request(
      `${baseURL}&url=https://www.amazon.com/dp/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
