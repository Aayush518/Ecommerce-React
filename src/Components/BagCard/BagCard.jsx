// src/Components/BagCard/BagCard.jsx
import './BagCard.css';
import heart from '../../assets/icons/heart-svgrepo-com.svg';
import cart from '../../assets/icons/bag-4-svgrepo-com.svg';
import PropTypes from 'prop-types';
import { useCart } from '../../context/CartContext';

const BagCard = ({ bagTitle, bagPrice, bagImage }) => {
    const { addToCart, addToWishlist } = useCart(); // Add addToWishlist function to the CartContext

    const handleAddToCart = () => {
        addToCart({
            id: bagTitle, // Using title as ID for simplicity
            bagTitle,
            bagPrice,
            bagImage
        });
    };

    const handleAddToWishlist = () => {
        addToWishlist({
            id: bagTitle, // Using title as ID for simplicity
            bagTitle,
            bagPrice,
            bagImage
        });
    };

    return (
        <div className='bagCard'>
            <div className="top-details">
                <div className="left-details">
                    <div className="bag-name">{bagTitle}</div>
                    <div className="bag-price">${bagPrice}</div>
                </div>
                <div className="right-controls">
                    <div className="heart" onClick={handleAddToWishlist}>
                        <img src={heart} alt="Add to wishlist" />
                    </div>
                    <div className="cart" onClick={handleAddToCart}>
                        <img src={cart} alt="Add to cart" />
                    </div>
                </div>
            </div>
            <div className="bag-image">
                <img src={bagImage} alt={bagTitle} />
            </div>
        </div>
    );
};

BagCard.propTypes = {
    bagTitle: PropTypes.string.isRequired,
    bagPrice: PropTypes.number.isRequired,
    bagImage: PropTypes.string.isRequired
};

export default BagCard;