import React from "react";
import header from "../../../Assets/cubo_02.png";
import "./header.css";

const Header = () =>{
    return(
        <div>
            <header className="Header--container">
                <div>
                <img className="header" src={header} alt="Cabeçalho" />
                </div>
            </header>
        </div>
    )
};

export default Header;