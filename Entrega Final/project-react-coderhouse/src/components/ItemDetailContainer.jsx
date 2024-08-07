import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
// import arrayProductos from "../assets/json/proyectosa.json";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(async () => {
        const db = getFirestore();
        const itemsCollection = collection(db, "proyectos");

        const project = await getDocs(itemsCollection);
        let itemsDB = project.docs.map((doc) => ({ ...doc.data() }));

        resolve(itemsDB.find((item) => item.id == id));
      }, 2000);
    });

    promesa.then((res) => {
      setItem(res);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}>
          Cargando...
        </p>
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
};

export default ItemDetailContainer;
