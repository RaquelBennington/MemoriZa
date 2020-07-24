import React from "react";
import AssetsGame from "../../../Assets/section_game.png";
import "../SectionGame/sectionGame.css"

const SectionGame = () => {
    return (
            <section class="SectionGame">
                <div className="vazia" >
                    <div className="First_Section">
                        <h1>Você conhece os Operadores de Comparação?</h1>
                        <div className="btnTwo">
                            <button className="btn_startGame1">Saiba + </button>
                            <button className="white"></button>
                            <button className="btn_startGame2">Jogar</button>
                        </div>
                    </div>
                </div>
                <div class="GameAssets">
                    <img className="AssetsGame" src={AssetsGame} alt="Imagem jogo da Memória" />
                </div>
            </section>
    )
};

export default SectionGame;
