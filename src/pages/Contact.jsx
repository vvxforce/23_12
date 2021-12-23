import React from "react";
import Navbar from "../components/Navbar";
import Wallet from "../components/Wallet";
import styled from "styled-components";

import "../css/Contact.css";

const Text = styled.div`
padding: 10vh 5vw;
 display:flex;
 justify-content: center;
 font-size: 48px;
`;

const Contact = () => {
  return (
    <>
      <Navbar/>
      <div className="contacts">
        <Text>Contacts</Text>
        <Wallet />
      </div>
    </>
  );
};

export default Contact;