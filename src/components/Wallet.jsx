import React from "react";
import { Link } from "react-router-dom";

import qr from '../img/qr.png';
import copy from '../img/copy.svg';
import "../css/Wallet.css";

const Wallet = () => {
  const btc = '1BoatSLRHtKNngkdXEeobR76b53LETtpyT';

  return (
    <>
        <p className="wallet-message">
            You can thank us by replenishing our <strong className="wallet-strong">Bitcoin</strong> Wallet:
        </p>
        <img src={qr} className="qr" alt="Bitcoin address" />
        <p>
            {btc}
            <button className="btn-copy" onClick={() => {navigator.clipboard.writeText(btc)}}>
            <img src={copy} alt="Copy address" />
            </button>
        </p>
        <Link to="/home" className="wallet-link">Get back to our mainpage</Link>
    </>
  );
};

export default Wallet;
