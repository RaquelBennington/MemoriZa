import React from "react";
import HomeContent from "../../Components/Organisms/HomeContent/HomeContent";
import GeneralTemplates from "../../Templates/GeneralTemplates/GeneralTemplates"
import Footer from "../../Components/Molecules/Footer/Footer";

import SectionOperators from "../../Components/Molecules/SectionOperators/SectionOperators";
import SectionCaroussel from "../../Components/Molecules/SectionCaroussel/SectionCaroussel";
import SectionGame from "../../Components/Molecules/SectionGame/SectionGame";

import  SectionCards from "../../Components/Molecules/SectionCards/SectionCards";

const Home = () =>{
    return(
        <>
        <GeneralTemplates />
        <HomeContent />

        <SectionOperators />
        <SectionCaroussel />
        <SectionGame />

        < SectionCards />
        <Footer />
        </>

    )
};

export default Home;