import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContext.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <div className="navbar-custom">
            <Navbar />
          </div>
          <div className="content">
            <Routes>
              <Route
                path={"/"}
                element={
                  <ItemListContainer texto={"¡Bienvenidos a la tienda!"} />
                }
              />
              <Route
                path={"/category/:id"}
                element={
                  <ItemListContainer texto={"¡Bienvenidos a la tienda!"} />
                }
              />
              <Route path={"/item/:id"} element={<ItemDetailContainer />} />
              <Route path={"/cart"} element={<Cart />} />
              <Route path={"/checkout"} element={<Checkout />} />
              <Route path={"*"} element={<h1>404 - Not Found</h1>} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
