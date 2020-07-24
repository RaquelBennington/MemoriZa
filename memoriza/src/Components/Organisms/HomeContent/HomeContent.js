import React from "react";
import SectionOperators from "../../Molecules/SectionOperators/SectionOperators";
import SectionCarousel from "../../Molecules/SectionCarousel/SectionCarousel";
import SectionGame from "../../Molecules/SectionGame/SectionGame";
import "./homeContent.css";


const HomeContent = () =>{
    return(
        <>
        <SectionGame />
        <SectionOperators />
        <SectionCarousel />
        </>
    )
};

export default HomeContent;