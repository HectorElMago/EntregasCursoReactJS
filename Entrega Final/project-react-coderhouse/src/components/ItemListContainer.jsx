// import arrayServicios from "../assets/json/proyectosa.json";
import { useEffect, useState } from "react";
import "../styles/ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "proyectos");

    const fetchData = async () => {
      setLoading(true);
      const project = await getDocs(itemsCollection);
      let itemsDB = project.docs.map((doc) => ({ ...doc.data() }));

      if (id) {
        itemsDB = itemsDB.filter((item) => item.category === id);
      }

      setItems(itemsDB);
      setLoading(false);

      console.log(itemsDB); // Datos obtenidos y posiblemente filtrados
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="c-center">
        <h1 style={{ alignSelf: "center" }}>{props.texto}</h1>
        {loading ? (
          <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}>
            Cargando...
          </p>
        ) : (
          <ItemList items={items} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
