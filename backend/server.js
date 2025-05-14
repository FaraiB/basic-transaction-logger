const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5001;
let transactions = []; // In-memory storage for now

app.use(cors());
app.use(bodyParser.json());

app.get("/api/transactions", (req, res) => {
  res.json(transactions);
});

app.post("/api/transactions", (req, res) => {
  const { description, amount } = req.body;

  if (!description || !amount) {
    return res
      .status(400)
      .json({ message: "Description and amount are required" });
  }

  const newTransaction = { description, amount };
  console.log("Received new transaction:", newTransaction);
  transactions.push(newTransaction);
  res.status(201).json({ message: "Transaction logged successfully" });
});

app.listen(port, (err) => {
  if (err) console.log("Server error");
  console.log(`Server listening on port ${port}`);
});
