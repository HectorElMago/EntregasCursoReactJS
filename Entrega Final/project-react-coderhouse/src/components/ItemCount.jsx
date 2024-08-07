import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemCount = (props) => {
  const { addToCart } = useContext(CartContext);

  const [contador, setContador] = useState(0);
  const [stock, setStock] = useState(props.stock);
  const [item, setItem] = useState(props.item);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Toastify({
        text: "No hay más stock disponible",
        duration: 3000,
        backgroundColor: "red",
        gravity: "bottom",
      }).showToast({ position: "bottom" });
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      Toastify({
        text: "No puedes seleccionar menos de 0 productos",
        duration: 3000,
        backgroundColor: "red",
        gravity: "bottom",
      }).showToast({ position: "bottom" });
    }
  };

  const onAdd = () => {
    if (stock > 0 && contador > 0) {
      setStock(stock - contador);
      addToCart(item, contador);
      Toastify({
        text: `Se han agregado ${contador} productos al carrito`,
        duration: 3000,
        backgroundColor: "green",
        gravity: "bottom",
      }).showToast({ position: "bottom" });
      setContador(0);
    } else {
      Toastify({
        text: "Para agregar al carrito, selecciona al menos un producto",
        duration: 3000,
        backgroundColor: "red",
        gravity: "bottom",
      }).showToast({ position: "bottom" });
    }
  };

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" onClick={restar}>
          -
        </button>
        <button type="button" className="btn btn-primary">
          {contador}
        </button>
        <button type="button" className="btn btn-primary" onClick={sumar}>
          +
        </button>
      </div>
      <button
        type="button"
        className="btn btn-success mx-2 mt-2"
        onClick={onAdd}
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
