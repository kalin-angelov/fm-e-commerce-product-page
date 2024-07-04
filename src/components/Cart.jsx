import { useContext } from "react";

import { Context } from "../context/Context";
import Product from "./Product";

const Cart = ( { cartHandler ,setCartHandler } ) => {
  const { quantity } = useContext(Context);
  
  return (
    <section className={cartHandler ? "cart-container-close" : "cart-container"}>
      <h3>Cart</h3>
      <div className="cart-content">
        {quantity !== 0 ?
          <Product cartHandler={cartHandler} setCartHandler={setCartHandler} />
          :
          <p className="message">Your cart is empty.</p>
        }
      </div>
    </section>
  );
};

export default Cart;
