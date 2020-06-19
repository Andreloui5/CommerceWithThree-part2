import React, { useState, useEffect } from "react";
import Commerce from "@chec/commerce.js";
import Item from "./components/Item";
import ItemRight from "./components/ItemRight";
import Navigation from "./components/Navigation";
// import { Canvas, useFrame, Dom } from "react-three-fiber";
// import Cart from "./components/Cart";

const commerce = new Commerce(
  "pk_test_183505c17b9df667acd2e6f925c4957b715322209303f"
);

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    commerce.products.list().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <Navigation />
      {/* maps through products and returns alternating views */}
      {products.map((product, index) =>
        index % 2 === 0 ? (
          <Item key={product.id} {...product} />
        ) : (
          <ItemRight key={product.id} {...product} />
        )
      )}
    </div>
  );
}

export default App;
