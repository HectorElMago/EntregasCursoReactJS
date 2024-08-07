import { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addToCart, cart } = useContext(CartContext);

  const onAdd = (quantity) => {
    addToCart(item, quantity);
    setStock(stock - quantity);
  };

  const [loaded, setLoaded] = useState(false);
  const [stock, setStock] = useState(0);

  useEffect(() => {
    if (Object.keys(item).length > 0) {
      setLoaded(true);
    }
  }, [item]);

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
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              style={{ height: "20rem" }}
              src={item.image}
              alt={item.title}
            />
          </div>
          <div className="col">
            <h2 style={{ fontSize: "3rem" }}>{item.title}</h2>
            <p style={{ fontSize: "1.5rem" }}>{item.price} USD</p>
            <p style={{ fontSize: "1.5rem" }}>
              Stock: {isInCart(item.id) ? stock : item.stock}
            </p>
            {loaded && (
              <ItemCount
                stock={isInCart(item.id) ? stock : item.stock}
                item={item}
                onAdd={onAdd}
              />
            )}
            <p style={{ fontSize: "2rem" }}>{item.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
