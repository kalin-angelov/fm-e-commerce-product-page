import { useEffect, useRef } from "react";

const BurgerMenu = ( { burgerHandler ,setBurgerHandler } ) => {
    const refMenu = useRef();

    useEffect(() => {
        const menuHandler = (e) => {
            if (refMenu.current && !refMenu.current.contains(e.target)) {
                setBurgerHandler(!burgerHandler);
            }
            console.log("Menu", refMenu.current);
        };

        window.addEventListener("mousedown", menuHandler);

        return () => {
            window.removeEventListener("mousedown", menuHandler);
        }

    },[]);

    return (
        <aside className={burgerHandler ? "burger-menu-close" : "burger-menu"} ref={refMenu} >
            <nav className="navigation">
                <figure onClick={() => setBurgerHandler(!burgerHandler)}>
                    <img src="/public/images/icon-close.svg" alt="X btn" />
                </figure>

                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </aside>
    );
};

export default BurgerMenu;
