import { useContext, useEffect, useRef } from "react";

import { Context } from "../context/Context";
import Product from "./Product";

const Cart = ( { cartOpen ,setCartOpen } ) => {
  const { quantity } = useContext(Context);
  const cartRef = useRef();

  useEffect(() => {
    const handleClickOutsideCart = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      };
    };

    if (cartOpen) {
      document.addEventListener("mousedown", handleClickOutsideCart)
    };

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCart);
    };

  },[cartOpen]);
  
  return (
    <section className={cartOpen ? "cart-container" : "cart-container-close"} ref={cartRef}>
      <h3>Cart</h3>
      <div className="cart-content">
        {quantity !== 0 ?
          <Product carOpen={cartOpen} setCartOpen={setCartOpen} />
          :
          <p className="message">Your cart is empty.</p>
        }
      </div>
    </section>
  );
};

export default Cart;
