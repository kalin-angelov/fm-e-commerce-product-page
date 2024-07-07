
const LightBoxGallery = () => {
    let imgNum =1;
    const onFocus = () => {

    };

    return (
        <div className="main-container">

            <div className="img-select">
                <figure className="on-focus">
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
        </div>
    );
};

export default LightBoxGallery;
