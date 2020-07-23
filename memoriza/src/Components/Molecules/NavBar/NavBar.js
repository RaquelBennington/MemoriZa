import React from "react";
import logo from "../../../Assets/logo_memoriza.png";
import "./navBar.css";

const NavBar = () => {
    return (
        <nav className="Navegation">
            <div className="NavBar--container">
                <img className="logotipo" src={logo} alt="Logotipo" />
                    <ul className="Navbar">
                        <li>Home</li>
                        <li>Operadores</li>
                        <li>Jogar</li>
                    </ul>
            </div>
        </nav>
    )
};

export default NavBar;