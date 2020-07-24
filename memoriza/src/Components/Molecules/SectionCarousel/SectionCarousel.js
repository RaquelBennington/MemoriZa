import React, { useState } from "react";
import AssetsComp from "../SectionCarousel/AssetsComp";
import a0 from "../../../Assets/carousel_01.png";
import a1 from "../../../Assets/carousel_02.png";
import a2 from "../../../Assets/carousel_03.png";
import a3 from "../../../Assets/carousel_04.png";
import a4 from "../../../Assets/carousel_05.png";
import a5 from "../../../Assets/carousel_06.png";
import a6 from "../../../Assets/carousel_07.png";
import a7 from "../../../Assets/carousel_08.png";
import "./sectionCarousel.css";

function SectionCarousel() {
    const [x, setX] = useState(0);
    let sliderArr = [
        <AssetsComp src={a7} />,
        <AssetsComp src={a6} />,
        <AssetsComp src={a5} />,
        <AssetsComp src={a4} />,
        <AssetsComp src={a3} />,
        <AssetsComp src={a2} />,
        <AssetsComp src={a1} />,
        <AssetsComp src={a0} />,
    ];
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className="slider">
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                        {item}
                    </div>
                );
            })}
            <button id="goLeft" onClick={goLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
                <i class="fas fa-chevron-right"></i>
            </button>
        </ div>
    );
}

export default SectionCarousel;