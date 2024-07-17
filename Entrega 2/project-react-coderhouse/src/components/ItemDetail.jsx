import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [loaded, setLoaded] = useState(false);
  const [stock, setStock] = useState(item.stock);

  useEffect(() => {
    if (Object.keys(item).length > 0) {
      setLoaded(true);
    }
  }, [item]);

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
            <p style={{ fontSize: "1.5rem" }}>Stock: {item.stock}</p>
            {loaded && <ItemCount stock={item.stock} />}
            <p style={{ fontSize: "2rem" }}>{item.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
