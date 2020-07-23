import React from "react";
import header from "../../../Assets/header.png";
import "./header.css";

const Header = () => {
    return (
        <div>
            <header className="Header--container">
                <div>
                    <img className="header" src={header} alt="Cabeçalho" />
                    <h1>Operadores</h1>
                    <p>Os operadores vão nos permitir fazer operações matemáticas, de comparação e lógicas. </p>
                </div>
            </header>
        </div>
    )
};

export default Header;
