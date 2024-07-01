import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="navigation-section">
        <figure className="menu-mobile">
          <img src="/images/icon-menu.svg" alt="menu icon" />
        </figure>
        
        <Link className="logo-title" to="/">sneakers</Link>
      </div>
      
      <div className="user-section">
        <button className="cart-btn">
          <img src="/images/icon-cart.svg" alt="shopping cart icon" />
        </button>

        <figure className="profile-img">
          <img src="/images/image-avatar.png" alt="profile image" />
        </figure>
      </div>
    </header>
  );
};

export default Header;
