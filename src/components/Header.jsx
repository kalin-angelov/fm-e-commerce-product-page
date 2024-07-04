import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../context/Context";

import BurgerMenu from "./BurgerMenu";
import Cart from "./Cart";

const Header = () => {
    const { numOfProducts } = useContext(Context);
    const [burgerHandler ,setBurgerHandler] = useState(true);
    const [cartHandler ,setCartHandler] = useState(true);

    const onMenuClick = () => {
        setBurgerHandler(!burgerHandler);
        setCartHandler(true);
    };

    const onCartClick = () => {
        setCartHandler(!cartHandler);
    };

    return (
        <header>
            <div className="navigation-section">
                <figure className="menu-mobile" onClick={onMenuClick}>
                    <img src="/images/icon-menu.svg" alt="menu icon" />
                </figure>
                
                <BurgerMenu 
                    burgerHandler={burgerHandler}
                    setBurgerHandler={setBurgerHandler}
                />
                <Link className="logo-title" to="/">sneakers</Link>
            </div>
            
            <div className="user-section">
                <button className="cart-btn" onClick={onCartClick}>
                    <img src="/images/icon-cart.svg" alt="shopping cart icon" />
                    {numOfProducts != 0 && <span className="num-of-products">{numOfProducts}</span>}
                </button>

                <Cart 
                    cartHandler={cartHandler}
                    setCartHandler={setCartHandler}
                />

                <figure className="profile-img">
                    <img src="/images/image-avatar.png" alt="profile image" />
                </figure>
            </div>
        </header>
    );
};

export default Header;
