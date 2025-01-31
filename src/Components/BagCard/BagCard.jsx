// src/Components/BagCard/BagCard.jsx
import { useCart } from '../../context/CartContext';
import './BagCard.css';
import PropTypes from 'prop-types';

const BagCard = ({ bagImage, bagTitle, bagPrice }) => {
    const { addToCart, addToWishlist, isInWishlist } = useCart();
    
    const handleAddToCart = () => {
        const item = {
            id: Math.random().toString(), // In a real app, use proper unique IDs
            bagImage,
            bagTitle,
            bagPrice
        };
        addToCart(item);
    };

    const handleAddToWishlist = () => {
        const item = {
            id: Math.random().toString(),
            bagImage,
            bagTitle,
            bagPrice
        };
        addToWishlist(item);
    };

    return (
        <div className="bag-card">
            <img src={bagImage} alt={bagTitle} className="bag-image" />
            <h3>{bagTitle}</h3>
            <p>${bagPrice}</p>
            <div className="bag-actions">
                <button onClick={handleAddToCart} className="add-to-cart-btn">
                    Add to Cart
                </button>
                <button 
                    onClick={handleAddToWishlist} 
                    className={`wishlist-btn ${isInWishlist(bagTitle) ? 'active' : ''}`}
                >
                    {isInWishlist(bagTitle) ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
    );
};

BagCard.propTypes = {
    bagImage: PropTypes.string.isRequired,
    bagTitle: PropTypes.string.isRequired,
    bagPrice: PropTypes.number.isRequired
};

export default BagCard;