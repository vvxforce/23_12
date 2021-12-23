import React, { forwardRef } from "react";

import logo from "../img/logo.svg";
import "../css/Logo.css";

const Logo = forwardRef((_, ref) => {
    return (
        <span ref={ref}>
            <img src={logo} className="logo" alt="While Angels logo" />
            <strong className="text">WHT.</strong>
        </span>
    );
});

export default Logo;
