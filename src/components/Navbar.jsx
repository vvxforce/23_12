import React, { useRef, useImperativeHandle, forwardRef } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

import Logo from "./Logo";

import logoBG from "../img/logo-bg.svg";
import "../css/Navbar.css";

const Container = styled.div`
  padding: 3% 2% 3% 4%;
  ${mobile({
    padding: '5% 3%'
  })}
`;

const Right = styled.div`
  position: absolute;
  top: 5%;
  right: 2%;
  font-size: 14px;
`;

const MenuItem = styled.div`
  display: inline-block;
  margin: 0 47px 0 0;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  ${mobile({
    fontSize: "12px",
    margin: "0 15px 0 0"
  })}
`;

const Navbar = forwardRef(({ onItemClicked }, ref) => {
  const logoRef = useRef();
  const menuRef = useRef();

  useImperativeHandle(ref, () => ({
    get logo() {
      return logoRef;
    },
    get menu() {
      return menuRef;
    }
  }));

  return (
    <Container className={ref && 'center'}>
      {(!ref || window.innerWidth < 800) && <img  src={logoBG} className="logo-bg" alt="While Angels" />}
      {ref
        ? <Logo ref={logoRef} />
        : <Link to="/home">
            <Logo ref={logoRef} />
          </Link>
      }
      <Right ref={menuRef}>
        <Link to="/contact" onClick={onItemClicked}>
          <MenuItem>Contacts</MenuItem>
        </Link>
        <span className="language">RU</span>
        |
        <span className="language">EN</span>
      </Right>
    </Container>
  );
});

export default Navbar;
