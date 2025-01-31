// src/Components/Checkout/Checkout.jsx
import React from 'react';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, removeFromCart } = useCart();

    const total = cartItems.reduce((sum, item) => sum + item.bagPrice, 0);


    const handlePlaceOrder = () => {
     // Simulate a successful checkout for now.
        alert("Order Placed Successfully!");
        // Clear the cart after placing the order (for this simulation)
          cartItems.forEach(item=>removeFromCart(item.id))
     };


    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. Add items to checkout.</p>
            ) : (
                <>
                    <ul className="checkout-items">
                        {cartItems.map((item) => (
                            <li key={item.id} className="checkout-item">
                                <img src={item.bagImage} alt={item.bagTitle} className="item-image"/>
                                <div className="item-details">
                                    <h3>{item.bagTitle}</h3>
                                    <p>${item.bagPrice}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="checkout-total">
                         <span>Total:</span>
                         <span>${total.toFixed(2)}</span>
                    </div>
                    <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
                </>
            )}
        </div>
    );
};

export default Checkout;