import { useEffect, useRef, useState, useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "../context/Context";

const BurgerMenu = ( {setCartOpen} ) => {
    const menuRef = useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    const { windowSize } = useContext(Context);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            };
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    },[menuOpen]);

    const onMenuClick = () => {
        setMenuOpen(!menuOpen);
        setCartOpen(false);
    };

    return (
        <div className="navigation-section">
            <Link className="logo-title" to="/">sneakers</Link>

            {windowSize < 1024 ? 
                <>
                    <button className="burger-btn" onClick={onMenuClick}>
                        <img src="/images/icon-menu.svg" alt="menu icon" />
                    </button>

                    <aside className={menuOpen ? "burger-menu" : "burger-menu-close"} >
                        <nav className="navigation-burger" ref={menuRef}>

                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                <img src="/images/icon-close.svg" alt="X btn" />
                            </button>

                            <ul>
                                <li>Collections</li>
                                <li>Men</li>
                                <li>Women</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </aside>
                </>
                :
                <nav className="navigation">
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            }
        </div>
    );
};

export default BurgerMenu;
