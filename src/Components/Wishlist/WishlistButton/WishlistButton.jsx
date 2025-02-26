// src/Components/WishlistButton/WishlistButton.jsx
import { useCart } from '../../../context/CartContext';
import './WishlistButton.css';
import PropTypes from 'prop-types';

const WishlistButton = ({ item }) => {
    const { addToWishlist, removeFromWishlist, isInWishlist } = useCart();
    
    // Ensure item has an ID to avoid identification issues
    const itemWithId = {
        ...item,
        id: item.id || `item-${item.bagTitle}-${Date.now()}`
    };
    
    const isItemInWishlist = isInWishlist(itemWithId.id);
    
    const handleWishlistClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        
        if (isItemInWishlist) {
            removeFromWishlist(itemWithId.id);
        } else {
            addToWishlist(itemWithId);
        }
        
        // Add a console log to verify button is working
        console.log('Wishlist button clicked:', isItemInWishlist ? 'Removed from wishlist' : 'Added to wishlist');
    };

    return (
        <button
            className={`wishlist-button ${isItemInWishlist ? 'active' : ''}`}
            onClick={handleWishlistClick}
            aria-label={isItemInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            title={isItemInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            type="button"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={isItemInWishlist ? '#ff0000' : 'none'} 
                stroke={isItemInWishlist ? '#ff0000' : 'currentColor'}
                strokeWidth={isItemInWishlist ? '0' : '1.8'}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="wishlist-icon"
            >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
        </button>
    );
};

WishlistButton.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,  // Made optional since we handle missing IDs
        bagTitle: PropTypes.string.isRequired,
        bagPrice: PropTypes.number.isRequired,
        bagImage: PropTypes.string.isRequired
    }).isRequired
};

export default WishlistButton;