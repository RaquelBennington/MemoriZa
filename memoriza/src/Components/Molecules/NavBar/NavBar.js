import React from "react";
import logo from "../../../Assets/logotipo_memoriza.png";
import "./navBar.css";

const NavBar = () =>{
    return(
        <div className="NavBar--container">
            <nav>
                <div className="logotipo">
                    <img src={logo} alt="Logotipo" />
                </div>
                <div className="Navbar">
                    <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>                       
                    </ul>                    
                </div>
            </nav>
        </div>
    )
};

export default NavBar;