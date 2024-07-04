const Product = ({ cartHandler, setCartHandler, quantity}) => {

    const onCheckOut = () => {
        setCartHandler(!cartHandler)
    };

    return (
        <div className="product-container">
            <div className="product">
                <figure>
                    <img src="/public/images/image-product-1-thumbnail.jpg" alt="sneakers" />
                </figure>
                <section>
                    <h4>Fall Limited Edition Sneakers</h4>
                    <p className="sneaker-price">$125.00 x <span className="sneakers-num">{quantity}</span> <span className="final-price">${quantity * 125}</span></p>
                </section>
                <figure>
                    <img src="/public/images/icon-delete.svg" alt="trash can" />
                </figure>
            </div>
            <button className="checkout-btn" onClick={onCheckOut}>Checkout</button>
        </div>
    );
};

export default Product;
