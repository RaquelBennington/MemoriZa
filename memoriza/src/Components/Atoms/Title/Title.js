import React from "react";
import "./title.css";

const Title = (props) =>{
    return(
        <div className="TitleHeader">
            <h1 >{props.title}</h1>
        </div>
    )
};

export default Title;