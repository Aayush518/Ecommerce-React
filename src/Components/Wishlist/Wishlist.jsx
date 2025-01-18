// src/Components/Wishlist/Wishlist.jsx
import { useCart } from '../../context/CartContext';
import './Wishlist.css';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist, addToCart } = useCart();

    const handleMoveToCart = (item) => {
        addToCart(item);
        removeFromWishlist(item.id);
    };

    return (
        <div className="wishlist-container">
            <h1>My Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p className="empty-wishlist">Your wishlist is empty.</p>
            ) : (
                <div className="wishlist-grid">
                    {wishlistItems.map((item) => (
                        <div key={item.id} className="wishlist-item">
                            <img src={item.bagImage} alt={item.bagTitle} />
                            <h2>{item.bagTitle}</h2>
                            <p className="price">${item.bagPrice}</p>
                            <div className="wishlist-actions">
                                <button onClick={() => handleMoveToCart(item)}>
                                    Move to Cart
                                </button>
                                <button onClick={() => removeFromWishlist(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;