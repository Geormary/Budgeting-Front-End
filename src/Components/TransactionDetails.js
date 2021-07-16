import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

export default withRouter(function TransactionDetails({ history, match }) {
  const [transaction, setTransaction] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((res) => {
        console.log(res.data);
        setTransaction(res.data);
      })
      .catch((e) => {
        console.error(e);
        history.push("/not-found");
      });
  }, []);

  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">{transaction.date}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{transaction.category}</h6>
        <p class="card-text">{transaction.amount}</p>
        {/* <button type="button">
          EDIT
        </button> */}
        <button type="button">DELETE</button>
      </div>
    </div>
  );
});
