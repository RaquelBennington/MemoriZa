import React from "react";
import CardFront from "../../../Assets/letter_Front.png";
import "./sectionCards.css";

const SectionCards = () =>{
    return(
        <div>
            <section className="container">
                <div className="Cards--container-01">
                    <img className="size" src={CardFront} alt="Carta frente" />
                    <img className="size" src={CardFront} alt="Carta frente" />
                    <img className="size" src={CardFront} alt="Carta frente" />
                    <img className="size" src={CardFront} alt="Carta frente" />
                </div>
                <div div className="Cards--container-02">
                    <img className="size" src={CardFront} alt="Carta frente" />
                    <img className="size" src={CardFront} alt="Carta frente" />
                    <img className="size" src={CardFront} alt="Carta frente" />
                    <img className="size" src={CardFront} alt="Carta frente" /> 
                </div>
                <div className="Cards--container-03">
                    <img className="size" src={CardFront} alt="Carta frente" />
                    <img className="size" src={CardFront} alt="Carta frente" />
                    <img className="size" src={CardFront} alt="Carta frente" />
                    <img className="size" src={CardFront} alt="Carta frente" />
                </div>
                <div div className="Cards--container-04">
                    <img className="size" src={CardFront} alt="Carta frente" />
                    <img className="size" src={CardFront} alt="Carta frente" />
                    <img className="size" src={CardFront} alt="Carta frente" />
                    <img className="size" src={CardFront} alt="Carta frente" /> 
                </div>
            </section>
        </div>
    )
};

export default SectionCards;