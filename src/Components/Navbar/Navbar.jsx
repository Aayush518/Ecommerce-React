import "./Navbar.css";
import { useState } from "react";
import hamBurger from "../../assets/icons/hamburger-4-svgrepo-com.svg";
import profile from "../../assets/icons/profile-svgrepo-com (2).svg";
import heart from "../../assets/icons/heart-svgrepo-com.svg";
import shoppingBag from "../../assets/icons/bag-4-svgrepo-com.svg";
import searchIcon from "../../assets/icons/search-5-svgrepo-com.svg";
import CartModal from "../CartModal/CartModal";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Navbar">
      <div className="top-nav">
        <div className="hamburger icon-container" onClick={toggleMenu}>
          <img src={hamBurger} alt="Menu" />
        </div>
        <div className="logo fw-bold">Bagstore</div>
        <div className="right-menus">
          <div className="icon-container">
            <img src={heart} alt="Favorites" />
          </div>
          <div className="icon-container relative" onClick={() => setIsCartOpen(true)}>
            <img src={shoppingBag} alt="Cart" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </div>
          <div className="icon-container">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </div>

      <div className={`bottom-nav ${isMenuOpen ? "open" : ""}`}>
        <div className="categories">
          <button className="btn category">Men</button>
          <button className="btn category">Women</button>
          <button className="btn category">Children</button>
          <button className="btn category">Brand</button>
          <button className="btn category">New</button>
          <button className="btn category">Popular</button>
        </div>
        <div className="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <img src={searchIcon} alt="Search" />
        </div>
        <div className="additional-links">
          <button className="btn category">About</button>
          <button className="btn category">FAQs</button>
        </div>
      </div>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Navbar;