import React from "react";

function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.description} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
