import { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Item = ({ item }) => {
  const { cart } = useContext(CartContext);
  const [stock, setStock] = useState(0);

  useEffect(() => {
    const productInCart = cart.find((product) => product.id === item.id);
    if (productInCart) {
      setStock(productInCart.stock - productInCart.quantity);
    }
  }, [cart, item.id]);

  const isInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          height: "30rem",
          padding: "10px",
          margin: "1rem",
        }}
        key={item.id}
      >
        <div style={{ height: "18rem" }}>
          <img src={item.image} className="card-img-top" alt={item.title} />
          <h2 style={{ fontSize: "1rem" }}>{item.title}</h2>

          <p
            style={{
              fontFamily: "bold",
              fontSize: "1.5rem",
              alignSelf: "center",
            }}
          >
            {item.price} USD
          </p>
          <p className="card-text">
            Stock: {isInCart(item.id) ? stock : item.stock}
          </p>
        </div>
        <ItemCount stock={isInCart(item.id) ? stock : item.stock} item={item} />

        <div style={{ marginTop: "1rem" }}>
          <Link to={`/item/${item.id}`} className="btn btn-primary">
            <button type="button" className="btn btn-primary">
              Mostrar más
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
