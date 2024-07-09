import { useState } from "react";

const LightBoxGallery = ( { handleLightBox } ) => {
    const [imgNum, setImgNum] = useState(1);

    const onFocus = (e) => {
        const idNum = e.target.id;
        setImgNum(idNum);
    };

    const sliderControl = (e) => {
        const btn = e.target.id;

        if (btn === "next") {
            imgNum === 4 ? setImgNum(1) : setImgNum(imgNum + 1);
        } else {
            imgNum === 1 ? setImgNum(4) : setImgNum(imgNum - 1);
        }
    };

    return (
        <div className="light-box-container">

            <div className="light-box-img-select">
                <button className="close-btn" onClick={handleLightBox}>
                    <svg xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"/></svg>
                </button>
                <figure className="light-box-on-focus">
                    <img src={`/images/image-product-${imgNum}.jpg` } alt="product" />
                </figure>

                <div className="slider-btn">
                    <button className="btn-container" id="previous" onClick={(e) => sliderControl(e)}>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" strokeWidth="3" fill="white" /></svg>
                    </button>
                    <button className="btn-container" id="next" onClick={(e) => sliderControl(e)}>
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" strokeWidth="3" fill="white"/></svg>
                    </button>
                </div>

                <ul className="light-box-img-catalog">
                    <li  onClick={(e) => onFocus(e)}>
                        <img className={imgNum == 1 ? "img-on" : null} id="1" src="/images/image-product-1-thumbnail.jpg" alt="product" />
                    </li>
                    <li onClick={(e) => onFocus(e)}>
                        <img className={imgNum == 2 ? "img-on" : null} id="2" src="/images/image-product-2-thumbnail.jpg" alt="product" />
                    </li>
                    <li onClick={(e) => onFocus(e)}>
                        <img className={imgNum == 3 ? "img-on" : null} id="3" src="/images/image-product-3-thumbnail.jpg" alt="product" />
                    </li>
                    <li onClick={(e) => onFocus(e)}>
                        <img className={imgNum == 4 ? "img-on" : null} id="4" src="/images/image-product-4-thumbnail.jpg" alt="product" />
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default LightBoxGallery;
