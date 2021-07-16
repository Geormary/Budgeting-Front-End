import axios from "axios";
import React from "react";
import Transaction from "./Transaction.js";
import { apiURL } from "../util/apiURL.js";
import { useState, useEffect } from "react";

const API = apiURL();

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then(
        (res) => setTransactions(res.data),
        (e) => console.log("get", e)
      )
      .catch((c) => console.warn("catch", c));
  }, []);

  console.log(transactions);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </tbody>
    </table>
  );
}
