import { useState } from "react";

import BurgerMenu from "./BurgerMenu";
import Cart from "./Cart";

const Header = () => {
    const [cartOpen ,setCartOpen] = useState(false);

    return (
        <header>

            <BurgerMenu setCartOpen={setCartOpen}/>
            
            <div className="user-section">
                <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}/>

                <figure className="profile-img">
                    <img src="/images/image-avatar.png" alt="profile image" />
                </figure>
            </div>
        </header>
    );
};

export default Header;
