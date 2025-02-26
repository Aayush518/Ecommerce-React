// src/Components/BagCard/BagCard.jsx
import { useCart } from '../../context/CartContext';
import './BagCard.css';
import PropTypes from 'prop-types';
import WishlistButton from '../Wishlist/WishlistButton/WishlistButton';

const BagCard = ({ bagImage, bagTitle, bagPrice, id }) => {
    const { addToCart } = useCart();
    
    const handleAddToCart = () => {
        const item = {
            id: id || Math.random().toString(), // Use provided ID or generate one
            bagImage,
            bagTitle,
            bagPrice
        };
        addToCart(item);
    };

    // Create item object for the wishlist button
    const item = {
        id: id || Math.random().toString(),
        bagImage,
        bagTitle,
        bagPrice
    };

    return (
        <div className="bag-card">
            <div className="bag-image-container">
                <img src={bagImage} alt={bagTitle} className="bag-image" />
                <WishlistButton item={item} />
            </div>
            <h3>{bagTitle}</h3>
            <p>${bagPrice}</p>
            <div className="bag-actions">
                <button onClick={handleAddToCart} className="add-to-cart-btn">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

BagCard.propTypes = {
    bagImage: PropTypes.string.isRequired,
    bagTitle: PropTypes.string.isRequired,
    bagPrice: PropTypes.number.isRequired,
    id: PropTypes.string
};

export default BagCard;