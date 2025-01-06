import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => {
      const exists = prevItems.some((i) => i.id === item.id);
      if (exists) {
        return prevItems.filter((i) => i.id !== item.id);
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  const getCartCount = () => cartItems.length;
  const getWishlistCount = () => wishlistItems.length;

  return (
    <CartContext.Provider value={{
      cartItems,
      wishlistItems,
      addToCart,
      addToWishlist,
      removeFromCart,
      removeFromWishlist,
      isInWishlist,
      getCartCount,
      getWishlistCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };