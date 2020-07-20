import React from "react";
import "./button.css";

const Button = (props) =>{
    return(
        <div>
            <button className="Button">{props.button}</button>
        </div>
    )
};

export default Button;