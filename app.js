const express = require("express");
const app = express();
const fs = require("fs");

app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));

let digits = "";
const stream = fs.createReadStream("pi1000000.txt");

stream.on("data", (chunk) => {
  digits += chunk;
});

stream.on("end", () => {
  console.log("our delicious pi has finished loading!");
});

app.get("/search", (req, res) => {
  let num = req.query.q;
  let index = digits.indexOf(num) - 1;
  res.json({ index });
});
