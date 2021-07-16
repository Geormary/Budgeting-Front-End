import React from "react";

export default function Transaction({ key, transaction }) {
  return (
      <tr>
        <td>{transaction.date}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount} </td>
      </tr>
  );
}
