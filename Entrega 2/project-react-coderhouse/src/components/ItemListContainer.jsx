import arrayServicios from "../assets/json/proyectos.json";
import { useEffect, useState } from "react";
import "../styles/ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setItems([]);
  }, [id]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          id
            ? arrayServicios.filter((item) => item.category == id)
            : arrayServicios
        );
      }, 2000);
    });

    promesa.then((res) => {
      setItems(res);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      <div className="c-center">
        <h1 style={{ alignSelf: "center" }}>{props.texto}</h1>
        {loading && <p>Cargando...</p>}
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
