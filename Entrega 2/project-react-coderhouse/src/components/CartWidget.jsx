import { useState } from "react";
import "../styles/CartWidget.css";

const CartWidget = () => {
  const [cart, setCart] = useState(0);

  return (
    <>
      <a className="bx bx-cart-alt">
        <div className="circle">
          <div className="number">{cart}</div>
        </div>
      </a>
    </>
  );
};

export default CartWidget;
