const Product = ({ handleCart, setHandleCart}) => {

    const onCheckOut = () => {
        setHandleCart(!handleCart);
    };

    return (
        <section className="product">
            <button className="checkout-btn" onClick={onCheckOut}>Checkout</button>
        </section>
    );
};

export default Product;
