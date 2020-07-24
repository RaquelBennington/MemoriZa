import React from "react";
import FlipFront1 from "../../../Assets/1.png"
import FlipBack2 from "../../../Assets/2.png"
import FlipFront3 from "../../../Assets/3.png"
import FlipBack4 from "../../../Assets/4.png"
import "./game.css"

const Game = () => {
    return (
        <section className="container">
            <div className="flip-card-container">
                <div className="flip-card">
                    <div className="flip-card-front">
                        <img src={FlipFront1} alt="Card Front" />
                    </div>
                    <div className="flip-card-back">
                        <img src={FlipBack2} alt="Card Back" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Game;