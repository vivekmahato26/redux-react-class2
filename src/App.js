import { Route, Routes } from "react-router-dom";
import ProductList from "./components/productList";
import ProductDetails from "./components/productDetails";
import Cart from "./components/cart";

function App() {
 
  return (
    <div className="App">
      <Cart/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        {/* <Route path="/product/:name" element={<ProductDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;
