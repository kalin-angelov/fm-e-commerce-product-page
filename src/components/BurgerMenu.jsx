import { useEffect, useRef } from "react";

const BurgerMenu = ( { menuOpen ,setMenuOpen } ) => {
    const menuRef = useRef();

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

    return (
        <aside className={menuOpen ? "burger-menu" : "burger-menu-close"} >
            <nav className="navigation" ref={menuRef}>
                <figure onClick={() => setMenuOpen(!menuOpen)}>
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
