// src/Components/WishlistButton/WishlistButton.jsx
import { useCart } from '../../context/CartContext';
import './WishlistButton.css';

const WishlistButton = ({ item }) => {
    const { addToWishlist, isInWishlist } = useCart();
    const isItemInWishlist = isInWishlist(item.id);

    return (
        <button
            className={`wishlist-button ${isItemInWishlist ? 'active' : ''}`}
            onClick={() => addToWishlist(item)}
            aria-label={isItemInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={isItemInWishlist ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="wishlist-icon"
            >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        </button>
    );
};

export default WishlistButton;