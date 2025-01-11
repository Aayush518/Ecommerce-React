// src/Components/Wishlist/Wishlist.jsx
<<<<<<< Updated upstream
import React from 'react';
=======
>>>>>>> Stashed changes
import { useCart } from '../../context/CartContext';
import './Wishlist.css'; // We'll create this next

const Wishlist = () => {
<<<<<<< Updated upstream
    const { wishlistItems } = useCart();

    return (
        <div>
            <h1>Wishlist</h1>
            {wishlistItems.map((item) => (
                <div key={item.id}>
                    <h2>{item.bagTitle}</h2>
                    <p>${item.bagPrice}</p>
                    <img src={item.bagImage} alt={item.bagTitle} />
                </div>
            ))}
=======
    const { wishlistItems, removeFromWishlist, addToCart } = useCart();

    const handleAddToCart = (item) => {
        addToCart(item);
        removeFromWishlist(item.id);
    };

    return (
        <div className="wishlist-container">
            <h1 className="wishlist-title">My Wishlist</h1>
            <div className="wishlist-items">
                {wishlistItems.length === 0 ? (
                    <p className="empty-wishlist">Your wishlist is empty.</p>
                ) : (
                    <div className="wishlist-grid">
                        {wishlistItems.map((item) => (
                            <div key={item.id} className="wishlist-item">
                                <img 
                                    src={item.bagImage} 
                                    alt={item.bagTitle} 
                                    className="wishlist-item-image"
                                />
                                <div className="wishlist-item-details">
                                    <h2>{item.bagTitle}</h2>
                                    <p className="price">${item.bagPrice}</p>
                                    <div className="wishlist-item-actions">
                                        <button 
                                            onClick={() => handleAddToCart(item)}
                                            className="add-to-cart-btn"
                                        >
                                            Add to Cart
                                        </button>
                                        <button 
                                            onClick={() => removeFromWishlist(item.id)}
                                            className="remove-btn"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
>>>>>>> Stashed changes
        </div>
    );
};

export default Wishlist;