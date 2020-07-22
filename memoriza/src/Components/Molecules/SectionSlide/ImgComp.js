import React from "react";
import "./imgComp.css";

function ImgComp ({src}){
    return(
        <img className="imgStyles" src={src} alt="slide-img" />
    )
}

export default ImgComp;