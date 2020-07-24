import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo_memoriza.png";
import "./navBar.css";

const NavBar = (props) => {
    return (
        <nav className="Navegation">
            <div className="NavBar--container">
                <img className="logotipo" src={logo} alt="Logotipo" />
                <ul className="Navbar">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/">
                        <li>Operadores</li>
                    </Link>
                    <Link to="/game">
                        <li>Jogar</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;