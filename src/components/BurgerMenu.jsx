const BurgerMenu = ( { burgerHandler ,setBurgerHandler } ) => {

    return (
        <aside className={burgerHandler ? "burger-menu-close" : "burger-menu"} >
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
