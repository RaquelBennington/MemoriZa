import React from "react";
import SectionCarousel from "../../Molecules/SectionCarousel/SectionCarousel";
import SectionGame from "../../Molecules/SectionGame/SectionGame";
import "./homeContent.css";


const HomeContent = () =>{
    return(
        <>
        <SectionGame />
        <SectionCarousel />
        </>
    )
};

export default HomeContent;