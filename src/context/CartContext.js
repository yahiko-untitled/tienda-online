// context/CartContext.js
import React, { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState(null);

  // Agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remover un producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Aplicar código de promoción
  const applyPromoCode = (code) => {
    setPromoCode(code);
  };

  // Calcular el total del carrito (incluye promoCode)
  const calculateTotal = () => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Aplicar descuento si hay un código de promoción
    if (promoCode === "DESCUENTO10") {
      return total * 0.9; // 10% de descuento
    }

    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        applyPromoCode,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
