// src/Components/Wishlist/Wishlist.jsx
import { useCart } from '../../context/CartContext';
import './Wishlist.css';
import { useState, useEffect } from 'react';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist, addToCart } = useCart();
    const [animatedItems, setAnimatedItems] = useState([]);

    useEffect(() => {
        setAnimatedItems(wishlistItems);
    }, [wishlistItems]);

    const handleMoveToCart = (item) => {
        addToCart(item);
        removeFromWishlist(item.id);
    };

    const handleRemoveItem = (itemId) => {
        // Apply a slight delay for visual feedback before actual removal
        const itemElement = document.querySelector(`[data-item-id="${itemId}"]`);
        if (itemElement) {
            itemElement.classList.add('removing');
            setTimeout(() => {
                removeFromWishlist(itemId);
            }, 300);
        } else {
            removeFromWishlist(itemId);
        }
    };

    return (
        <div className="wishlist-container">
            <h1>My Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p className="empty-wishlist">Your wishlist is empty. Add items to your wishlist to save them for later.</p>
            ) : (
                <div className="wishlist-grid">
                    {animatedItems.map((item) => (
                        <div 
                            key={item.id} 
                            className="wishlist-item" 
                            data-item-id={item.id}
                        >
                            <img src={item.bagImage} alt={item.bagTitle} />
                            <h2>{item.bagTitle}</h2>
                            <p className="price">${item.bagPrice}</p>
                            <div className="wishlist-actions">
                                <button 
                                    onClick={() => handleMoveToCart(item)}
                                    className="move-to-cart-btn"
                                >
                                    Move to Cart
                                </button>
                                <button 
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="remove-btn"
                                >
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