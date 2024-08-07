import { useContext, useEffect, useState } from "react";
import "../styles/CartWidget.css";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <a className="bx bx-cart-alt">
        {cart.length > 0 && (
          <div className="circle">
            <div className="number">{cart.length}</div>
          </div>
        )}
      </a>
    </>
  );
};

export default CartWidget;
