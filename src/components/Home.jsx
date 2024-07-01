import { useContext } from "react";

import { Context } from "../context/Context";

const Home = () => {
    const { quantity, setQuantity } = useContext(Context);

    const quantityHandler = (action) => {
        if (action === "plus") {
            setQuantity(quantity => ++quantity)
        } else {
            if (quantity === 0) {
                setQuantity(0);
            } else {
                setQuantity(quantity => --quantity);
            };
        };
    };

    return (
        <main>
            <section className="main-page-container">
                <h1>sneaker company</h1>
                <h2>Fall Limited Edition Sneakers</h2>
                <p className="summary">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
                <div className="price-tag">
                    <p className="discounted-price">$125.00 <span className="discount">50%</span></p>
                    <p className="regular-price">$250.00</p>
                </div>
                <div className="buttons-container">
                    <div className="quantity-btn button">
                        <img src="/images/icon-minus.svg" alt="minus" onClick={() => quantityHandler("minus")} />
                        {quantity}
                        <img src="/images/icon-plus.svg" alt="plus" onClick={() => quantityHandler("plus")} />
                    </div>
                    <button className="add-cart-btn button">
                        <img src="/images/icon-cart.svg" alt="cart icon" />
                        Add to cart
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Home;
