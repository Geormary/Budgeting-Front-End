import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <Link to="/transactions"><h1>BUDGET APP</h1></Link>
        {" "}
      <button type="button" class="btn btn-info btn-lg">
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </nav>
  );
}
