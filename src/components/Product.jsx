const Product = ({ cartOpen, setCartOpen, numOfProducts, setNumOfProducts }) => {

    const onCheckOut = () => {
        setCartOpen(false);
        setNumOfProducts(0);
    };

    return (
        <div className="product-container">
            <div className="product">
                <figure className="product-img">
                    <img src="/public/images/image-product-1-thumbnail.jpg" alt="sneakers" />
                </figure>
                <section>
                    <h4>Fall Limited Edition Sneakers</h4>
                    <p className="sneaker-price">$125.00 x <span className="sneakers-num">{numOfProducts}</span> <span className="final-price">${numOfProducts * 125}.00</span></p>
                </section>
                <button className="delete-btn" onClick={() => setNumOfProducts(0)}>
                    <img src="/public/images/icon-delete.svg" alt="trash can" />
                </button>
            </div>
            <button className="checkout-btn" onClick={onCheckOut}>Checkout</button>
        </div>
    );
};

export default Product;
