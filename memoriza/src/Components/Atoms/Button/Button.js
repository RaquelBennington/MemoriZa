import React from "react";
import "./button.css";

const Button = (props) =>{
    return(
        <div className="Button">
            <p>{props.button}</p>
        </div>
    )
};

export default Button;