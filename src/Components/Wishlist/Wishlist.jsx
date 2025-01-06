// src/Components/Wishlist/Wishlist.jsx
import React from 'react';
import { useCart } from '../../context/CartContext';

const Wishlist = () => {
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
        </div>
    );
};

export default Wishlist;