import React from "react";
import "./assetsComp.css";

function AssetsComp ({src}){
    return(
        <img className="imgStyles" src={src} alt="slide-img" />
    )
}

export default AssetsComp;