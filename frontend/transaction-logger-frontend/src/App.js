import React, { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/transactions");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
    }
  };

  const handleAddTransaction = async (newTransaction) => {
    try {
      const response = await fetch("http://localhost:5001/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction),
      });
      if (!response.ok) {
        let errorMessage = `HTTP error! status: ${response.status}`;
        try {
          const errorData = await response.json(); // Try to parse JSON
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          console.error("Error parsing JSON:", jsonError); // Log JSON parsing error
          // If JSON parsing fails, use the generic HTTP error message
        }
        throw new Error(errorMessage);
      }
      fetchTransactions();
    } catch (error) {
      console.error("Failed to add transaction:", error);
      alert(`Could not add transaction: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []); // Fetch transactions on component mount

  return (
    <div>
      <h1>Transaction Logger</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
