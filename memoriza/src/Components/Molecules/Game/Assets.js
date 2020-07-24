import React from "react";
import "./assets.css";

function Assets ({src}){
    return(
        <img className="assets" src={src} alt="Letter" />
    )
}

export default Assets;