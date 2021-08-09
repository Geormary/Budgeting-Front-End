import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiURL } from "../util/apiURL";

const API = apiURL();

export default function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    date: "",
    category:"",
    amount:""
  });

  const handleChange = (e) => {
    setTransaction({...transaction,[e.target.name]:e.target.value})
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/transactions`, transaction)
      .then((res) => {
        console.log(res.data);
        setTransaction(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <form onSubmit={handleSumbit}>
      <div class="mb-3  col-md-4 d-flex">
        <label for="exampleFormControlInput1" class="form-label">
          Date: 
        </label>
        <input onChange={handleChange} name="date" value={transaction.date} type="text" class="form-control" />{" "}
      </div>
      <div class="mb-3 col-md-4 d-flex">
        <label for="exampleFormControlInput1" class="form-label">
          Amount: 
        </label>
        <input onChange={handleChange} name ="amount" value = {transaction.amount}type="text" class="form-control" />{" "}
      </div>
      <div class="mb-3 col-md-4 d-flex">
        <label for="exampleFormControlInput1" class="form-label">
          Category:
        </label> 
        <input onChange={handleChange} name="category" value={transaction.category}type="text" class="form-control" />
      </div>
      <div class="mb-3 col-md-4 d-flex">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
