import Item from "./Item";
import "../styles/ItemList.css";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="row wrap-div">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
