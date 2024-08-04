import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import arrayProductos from "../assets/json/proyectos.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayProductos.find((item) => item.id == id));
      }, 2000);
    });

    promesa.then((res) => {
      setItem(res);
    });
  }, []);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
