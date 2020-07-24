import React from "react";
import AssetsGame from "../../../Assets/section_game.png";
import "../SectionGame/sectionGame.css"

const SectionGame = () => {
    return (
        <>
            <section>
                <div>
                    <h1 className="First_Title">Bora lá, agora é hora de memorizar</h1>
                </div>
            </section>
            <section class="SectionGame">
                <div className="vazia" >
                    <div className="First_Section">
                        <p>vamos memorizar?</p>
                        <div className="btnTwo">
                            <button className="btn_startGame1">Saiba mais</button>
                            <button className="btn_startGame2">Jogar</button>
                        </div>
                    </div>
                </div>
                <div class="GameAssets">
                    <img className="AssetsGame" src={AssetsGame} alt="Imagem jogo da Memória" />
                </div>
            </section>
        </>
    )
};

export default SectionGame;
