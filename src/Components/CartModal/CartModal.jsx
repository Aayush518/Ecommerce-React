// src/Components/CartModal/CartModal.jsx
// working  with cart
import { useCart } from '../../context/CartContext';
import './CartModal.css';
import closeIcon from '../../assets/icons/close-svgrepo-com.svg';

const CartModal = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart } = useCart();

    if (!isOpen) return null;

    const total = cartItems.reduce((sum, item) => sum + item.bagPrice, 0);

    return (
        <div className="cart-modal-overlay">
            <div className="cart-modal">
                <div className="cart-header">
                    <h2>Shopping Cart</h2>
                    <button className="close-btn" onClick={onClose}>
                        <img src={closeIcon} alt="Close" />
                    </button>
                </div>
                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.bagImage} alt={item.bagTitle} className="item-image" />
                                <div className="item-details">
                                    <h3>{item.bagTitle}</h3>
                                    <p>${item.bagPrice}</p>
                                </div>
                                <button 
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>
                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="total">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn">Checkout</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartModal;