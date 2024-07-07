import { useState, useContext } from "react";

import { Context } from "../context/Context";
import LightBoxGallery from "../components/LightBoxGallery";

const Slick = () => {
    const { windowSize } = useContext(Context);
    const [slideNumber, setSlideNumber] = useState(1);
    const [imgNum, setImgNum] = useState(1);
    const [lightBox, setLightBox] = useState(false);
    
    const sliderControl = (e) => {
        const btn = e.target.id;
        if (btn === "next") {
            slideNumber === 4 ? setSlideNumber(1) : setSlideNumber(slideNumber + 1);
        } else {
            slideNumber === 1 ? setSlideNumber(4) : setSlideNumber(slideNumber - 1);
        }
    };

    const onFocus = (e) => {
        const idNum = e.target.id;
        setImgNum(idNum);
    };

    const handleLightBox = () => {
        setLightBox(!lightBox)
    };

    return (
        <> {windowSize < 1024 ?
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
                :
                <>
                    <div className="img-select">
                        <figure className="on-focus" onClick={handleLightBox}>
                            <img src={`/public/images/image-product-${imgNum}.jpg` } alt="product" />
                        </figure>
                        <ul className="img-catalog">
                            <li  onClick={(e) => onFocus(e)}>
                                <img className={imgNum == 1 ? "img-on" : null} id="1" src="/public/images/image-product-1-thumbnail.jpg" alt="product" />
                            </li>
                            <li onClick={(e) => onFocus(e)}>
                                <img className={imgNum == 2 ? "img-on" : null} id="2" src="/public/images/image-product-2-thumbnail.jpg" alt="product" />
                            </li>
                            <li onClick={(e) => onFocus(e)}>
                                <img className={imgNum == 3 ? "img-on" : null} id="3" src="/public/images/image-product-3-thumbnail.jpg" alt="product" />
                            </li>
                            <li onClick={(e) => onFocus(e)}>
                                <img className={imgNum == 4 ? "img-on" : null} id="4" src="/public/images/image-product-4-thumbnail.jpg" alt="product" />
                            </li>
                        </ul>
                    </div>

                    {lightBox && <LightBoxGallery handleLightBox={handleLightBox} />}
                </>
                
            }
        </>
        
    );
};

export default Slick;