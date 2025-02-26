// src/context/CartContext.jsx
import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

const CartProvider = ({ children }) => {
  // Initialize state from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlistItems");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const exists = prevItems.some((i) => i.id === item.id);
      if (exists) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
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

  // Enhanced isInWishlist function that's more robust
  const isInWishlist = (id) => {
    if (!id) return false;
    return wishlistItems.some((item) => String(item.id) === String(id));
  };

  const getCartCount = () =>
    cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  const getWishlistCount = () => wishlistItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
        isInWishlist,
        getCartCount,
        getWishlistCount,
        // Add these new methods
        clearCart: () => setCartItems([]),
        clearWishlist: () => setWishlistItems([]),
        updateCartItemQuantity: (id, quantity) => {
          setCartItems((prevItems) =>
            prevItems.map((item) =>
              item.id === id ? { ...item, quantity } : item
            )
          );
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
