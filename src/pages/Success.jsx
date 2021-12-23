import React from "react";

import Navbar from "../components/Navbar";
import Wallet from "../components/Wallet";

import "../css/Success.css";

const Success = () => (
  <>
    <Navbar />
    <div className="success">
      <h1 className="success-h1">Thank You!</h1>
      <Wallet />
    </div>
  </>
);

export default Success;
