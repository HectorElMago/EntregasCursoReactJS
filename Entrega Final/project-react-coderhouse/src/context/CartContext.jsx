import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (!isInCart(product.id)) {
      setCart([...cart, { ...product, quantity }]);
    } else {
      const item = cart.find((item) => item.id == product.id);
      item.quantity += quantity;
      setCart([...cart]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id != productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (productId) => {
    return cart.some((product) => product.id == productId);
  };

  const totalProducts = () => {
    return cart.reduce((acum, item) => (acum += item.quantity), 0);
  };

  const sumProducts = () => {
    return cart.reduce((acum, item) => (acum += item.quantity * item.price), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalProducts,
        sumProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
