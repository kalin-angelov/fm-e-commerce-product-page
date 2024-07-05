import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../context/Context";

import BurgerMenu from "./BurgerMenu";
import Cart from "./Cart";

const Header = () => {
    const { numOfProducts } = useContext(Context);
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen ,setCartOpen] = useState(false);

    const onMenuClick = () => {
        setMenuOpen(!menuOpen);
        setCartOpen(false);
    };

    const onCartClick = () => {
        setCartOpen(!cartOpen);
    };

    return (
        <header>
            <div className="navigation-section">
                <figure className="menu-mobile" onClick={onMenuClick}>
                    <img src="/images/icon-menu.svg" alt="menu icon" />
                </figure>
                
                <BurgerMenu 
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />
                <Link className="logo-title" to="/">sneakers</Link>
            </div>
            
            <div className="user-section">
                <button className="cart-btn" onClick={onCartClick}>
                    <img src="/images/icon-cart.svg" alt="shopping cart icon" />
                    {numOfProducts != 0 && <span className="num-of-products">{numOfProducts}</span>}
                </button>

                <Cart 
                    cartOpen={cartOpen}
                    setCartOpen={setCartOpen}
                />

                <figure className="profile-img">
                    <img src="/images/image-avatar.png" alt="profile image" />
                </figure>
            </div>
        </header>
    );
};

export default Header;
