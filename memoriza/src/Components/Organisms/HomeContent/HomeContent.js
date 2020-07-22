import React from "react";
import SectionOperators from "../../Molecules/SectionOperators/SectionOperators";
import Slider from "../../Molecules/SectionSlide/SectionSlide";
import SectionCaroussel from "../../Molecules/SectionCaroussel/SectionCaroussel";
import SectionGame from "../../Molecules/SectionGame/SectionGame";
import "./homeContent.css";


const HomeContent = () =>{
    return(
        <>
        <SectionOperators />
        <Slider />
        <SectionCaroussel />
        <SectionGame />
        </>
    )
};

export default HomeContent;