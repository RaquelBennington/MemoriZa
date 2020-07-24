import React from "react";
import "./game.css"

const letter = [
    { front: "1.png", back: "2.png" },
    { front: "3.png", back: "4.png" },
    { front: "5.png", back: "6.png" },
    { front: "7.png", back: "8.png" },
    { front: "9.png", back: "10.png" },
    { front: "11.png", back: "12.png" },
    { front: "13.png", back: "14.png" },
    { front: "15.png", back: "16.png" },

]

const Game = () => {
    return (
        <section className="container">

            <div className="flip-card-container">
            {letter.map((item) => {
                return (
                        <div className="flip-card">
                            <div className="flip-card-front">
                                <img src={`${process.env.PUBLIC_URL}/img/${item.front}`} alt="Card Front" />
                            </div>
                            <div className="flip-card-back">
                            <img src={`${process.env.PUBLIC_URL}/img/${item.back}`} alt="Card Back" />
                            </div>
                        </div>
                )
            })}
            </div>

        </section>
    )
}

export default Game;