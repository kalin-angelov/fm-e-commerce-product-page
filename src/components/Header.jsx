import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../context/Context";

import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const { numOfProducts } = useContext(Context);
  
  return (
    <header>
        <div className="navigation-section">
            <figure className="menu-mobile">
                <img src="/images/icon-menu.svg" alt="menu icon" />
            </figure>
            
            <BurgerMenu />
            <Link className="logo-title" to="/">sneakers</Link>
        </div>
        
        <div className="user-section">
            <button className="cart-btn">
                <img src="/images/icon-cart.svg" alt="shopping cart icon" />
                {numOfProducts != 0 && <span className="num-of-products">{numOfProducts}</span>}
            </button>

            <figure className="profile-img">
                <img src="/images/image-avatar.png" alt="profile image" />
            </figure>
        </div>
    </header>
  );
};

export default Header;
