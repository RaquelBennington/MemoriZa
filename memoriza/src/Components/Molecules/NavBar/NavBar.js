import React from "react";
import logo from "../../../Assets/teste.png";
import "./navBar.css";

const NavBar = () =>{
    return(
        <div className="Navegation">
            <nav>
                <div className="NavBar--container">
                    <div className="logotipo">
                        <img src={logo} alt="Logotipo" />
                    </div>
                    <div className="um">
                        <ul className="Navbar">
                        <li>Home</li>
                        <li>Operadores</li>
                        <li>Jogar</li>                       
                        </ul>                    
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;