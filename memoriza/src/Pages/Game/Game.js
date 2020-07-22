import React from "react";
import GeneralTemplates from "../../Templates/GeneralTemplates/GeneralTemplates";
import GameContent from "../../Components/Organisms/GameContent/GameContent";
import Footer from "../../Components/Molecules/Footer/Footer";
import "./game.css";

const Game = () =>{
    return(
        <>
        <GeneralTemplates />
        <GameContent />
        

        <Footer />
        </>
    )
}

export default Game;