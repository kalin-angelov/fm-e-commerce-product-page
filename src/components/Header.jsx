import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../context/Context";

import BurgerMenu from "./BurgerMenu";
import Cart from "./Cart";

const Header = () => {
  const { numOfProducts } = useContext(Context);
  const [ burgerHandler, setBurgerHandler ] = useState(true);
  const [ handleCart, setHandleCart ] = useState(false);

  const onBurgerClick = () => {
    setBurgerHandler(!burgerHandler);
  };

  const onCartClick = () => {
    setHandleCart(!handleCart);
  };
  
  return (
    <header>
        <div className="navigation-section">
            <button className="menu-mobile" onClick={onBurgerClick}>
                <img src="/images/icon-menu.svg" alt="menu icon" />
            </button>
            
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
                handleCart={handleCart}
                setHandleCart={setHandleCart}
            />

            <figure className="profile-img">
                <img src="/images/image-avatar.png" alt="profile image" />
            </figure>
        </div>
    </header>
  );
};

export default Header;
