import React from "react";
import header from "../../../Assets/header.png";
import "./header.css";

const Header = () =>{
    return(
        <div className="Header--container">
            <header>
                <div className="Header">
                <img src={header} alt="Cabeçalho" />
                </div>
            </header>
        </div>
    )
};

export default Header;
