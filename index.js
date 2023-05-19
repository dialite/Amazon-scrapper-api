const express = require("express");
const res = require("express/lib/response");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcom to Amazon API scraper");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
