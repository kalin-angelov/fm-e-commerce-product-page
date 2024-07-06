import { useState } from "react";

const Slick = () => {
    const [slideNumber, setSlideNumber] = useState(1);

    const sliderControl = (e) => {
        const btn = e.target.id;
        if (btn === "next") {
            slideNumber === 4 ? setSlideNumber(1) : setSlideNumber(slideNumber++);
        } else {
            setSlideNumber(setSlideNumber--);
        }
    };

    return (
        <div className="img-slider">

            <div className="img-container">
                <figure style={{display: slideNumber === 1 ? "block": "none"}}>
                    <img src="/public/images/image-product-1.jpg" alt="product img" />
                </figure>
                <figure style={{display: slideNumber === 2 ? "block": "none"}}>
                    <img src="/public/images/image-product-2.jpg" alt="product img" />
                </figure>
                <figure style={{display: slideNumber === 3 ? "block": "none"}}>
                    <img src="/public/images/image-product-3.jpg" alt="product img" />
                </figure>
                <figure style={{display: slideNumber === 4 ? "block": "none"}}>
                    <img src="/public/images/image-product-4.jpg" alt="product img" />
                </figure>
            </div>
            
            <div className="slider-btn">
                <button className="btn-container" id="previous" onClick={(e) => sliderControl(e)}>
                    <img src="/public/images/icon-previous.svg" alt="arrow img" />
                </button>
                <button className="btn-container" id="next" onClick={(e) => sliderControl(e)}>
                    <img src="/public/images/icon-next.svg" alt="arrow img" />
                </button>
            </div>

        </div>
    );
};

export default Slick;
