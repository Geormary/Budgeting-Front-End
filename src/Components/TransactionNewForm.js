import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

export default function TransactionNewForm() {
    const [transaction, setTransaction] = useState([]);
    useEffect(() => {
        axios
          .post(`${API}/transactions/`)
          .then((res) => {
            console.log(res.data);
            setTransaction(res.data);
          })
          .catch((e) => {
            console.error(e);
          });
      }, []);



  return (
    <form>
      <div class="mb-3  col-md-4">
        <label for="exampleFormControlInput1" class="form-label">
          Date
        </label>
        <input type="text" class="form-control" />{" "}
      </div>
      <div class="mb-3 col-md-4">
        <label for="exampleFormControlInput1" class="form-label">
          Amount
        </label>
        <input type="number" class="form-control" />{" "}
      </div>
      <div class="mb-3 col-md-4">
        <label for="exampleFormControlInput1" class="form-label">
          Category
        </label>
        <input type="text" class="form-control" />
      </div>
      <div class="mb-3 col-md-4">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
