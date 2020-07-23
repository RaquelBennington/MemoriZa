import React, { useState } from "react";
import AssetsComp from "../SectionCarousel/AssetsComp";
import a0 from "../../../Assets/5.png";
import a1 from "../../../Assets/1.png";
import a2 from "../../../Assets/2.png";
import a3 from "../../../Assets/3.png";
import a4 from "../../../Assets/4.png";
import "./sectionCarousel.css";

function SectionCarousel() {
    const [x, setX] = useState(0);
    let sliderArr = [
        <AssetsComp src={a0} />,
        <AssetsComp src={a1} />,
        <AssetsComp src={a2} />,
        <AssetsComp src={a3} />,
        <AssetsComp src={a4} />
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