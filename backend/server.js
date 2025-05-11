const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;
let transactions = []; // In-memory storage for now

app.use(cors());
app.use(bodyParser.json());

app.get("/api/transactions", (req, res) => {
  res.json(transactions);
});

app.post("/api/transactions", (req, res) => {
  const newTransaction = req.body;
  console.log("Received new transaction:", newTransaction);
  transactions.push(newTransaction);
  res.status(201).json({ message: "Transaction logged successfully" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Keep the process alive (simple hack for this example)
setInterval(() => {
  // Do nothing
}, 1000 * 60 * 60); // Run every hour
