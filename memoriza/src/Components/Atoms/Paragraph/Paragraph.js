import React from "react";
import "./title.css";

const Paragraph = (props) =>{
    return(
        <div className="ParagraphHeader">
            <h1 >{props.paragraph}</h1>
        </div>
    )
};

export default Paragraph;

