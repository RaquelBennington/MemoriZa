import React from "react";
import HomeContent from "../../Components/Organisms/HomeContent/HomeContent";
import GeneralTemplates from "../../Templates/GeneralTemplates/GeneralTemplates"
import Footer from "../../Components/Molecules/Footer/Footer";

const Home = () =>{
    return(
        <>
        <GeneralTemplates />
        <HomeContent />
        <Footer />
        </>

    )
};

export default Home;