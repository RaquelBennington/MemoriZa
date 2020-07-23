import React from "react";
import AssetsGame from "../../../Assets/section_game.png";
import "../SectionGame/sectionGame.css"

const SectionGame = () => {
    return (
        <section class="SectionGame">

            <div className="vazia" >
                <div className="First_Section">
                    <h1 className="First_Title">Bora lá, agora é hora de memorizar</h1>
                    <p>Agora que você aprendeu o que são os Operadores de comparação, vamos memorizar?</p>
                    <button className="btn_startGame">Jogar</button>
                </div>
            </div> 

            <div class="GameAssets">
                <img className="AssetsGame" src={AssetsGame} alt="Imagem jogo da Memória" />
            </div>

        </section>
    )
};

export default SectionGame;
