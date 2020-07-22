import React, { useState } from "react";
import "./sectionSlide.css";
import ImgComp from "../../Molecules/SectionSlide/ImgComp";
import i1 from "../../../Assets/02_CBMAQS.png";
import i2 from "../../../Assets/01_CBENI.png";
import i3 from "../../../Assets/02_CBMQIS.png";
import i4 from "../../../Assets/02_CBNIS.png";

function Slider() {
    const [x, setX] = useState(0);
    let sliderArr = [
        <ImgComp src={i1} />,
        <ImgComp src={i2} />,
        <ImgComp src={i3} />,
        <ImgComp src={i4} />,
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

export default Slider;