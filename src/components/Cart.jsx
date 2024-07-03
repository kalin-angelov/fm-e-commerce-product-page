import { useContext, useEffect, useRef } from "react";

import { Context } from "../context/Context";
import Product from "./Product";

const Cart = ( { handleCart, setHandleCart } ) => {
    const refCart = useRef();
    const { quantity } = useContext(Context);
  
    useEffect(() => {
      const cartHandler = (e) => {
        if (refCart.current &&  !refCart.current.contains(e.target)) {
          setHandleCart(!handleCart);
        }
      }
    
      console.log(handleCart);
      window.addEventListener("mousedown", cartHandler);

      return () => window.removeEventListener("mousedown", cartHandler);

    },[]);

  return (
    <section className={handleCart ? "cart-container" : "cart-container-close"} ref={refCart}>
      <h3>Cart</h3>
      <div className="cart-content">
        {quantity !== 0 ?
          <Product handleCart={handleCart} setHandleCart={setHandleCart} />
          :
          <p className="message">Your cart is empty.</p>
        }
      </div>
    </section>
  );
};

export default Cart;
