import React, { useState, useEffect } from "react";
import Commerce from "@chec/commerce.js";
import Item from "./components/Item";
import ItemRight from "./components/ItemRight";
import Navigation from "./components/Navigation";
// import { Canvas, useFrame, Dom } from "react-three-fiber";
// import Cart from "./components/Cart";

const commerce = new Commerce(
  "pk_test_18265006f98e5bc6f77efa3b7d99014bf7e1a31d0e6a3"
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
