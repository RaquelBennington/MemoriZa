import React from "react";
import logo from "../../../Assets/logotipo_memoriza.png";
import "./navBar.css";

const NavBar = () =>{
    return(
        <div className="Navegation">
            <nav>
                <div className="NavBar--container">
                    <div>
                        <img className="logotipo" src={logo} alt="Logotipo" />
                    </div>
                    <div className="ERRADA">
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