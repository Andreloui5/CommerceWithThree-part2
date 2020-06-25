import React, { useState, useEffect } from "react";
import Commerce from "@chec/commerce.js";
import Item from "./components/Item";
// import ItemRight from "./components/ItemRight";
import Navigation from "./components/Navigation";

const commerce = new Commerce(
  "pk_test_183505c17b9df667acd2e6f925c4957b715322209303f"
);

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState();

  useEffect(() => {
    commerce.cart.retrieve().then((res) => {
      // console.log(res);
      setCart(res);
    });
    commerce.products.list().then((res) => {
      setProducts(res.data);
    });
  }, []);

  const addToCart = (productId, variantInfo) => {
    commerce.cart.add(productId, variantInfo).then((res) => {
      setCart(res.cart);
    });
  };
  console.log(cart);
  return (
    <div>
      <Navigation {...cart} />
      {/* maps through products and returns alternating views */}
      {products.map((product, index) =>
        index % 2 === 0 ? (
          <Item
            key={product.id}
            {...product}
            addToCart={addToCart}
            // emptyCart={emptyCart}
          />
        ) : (
          <></>

          /* <ItemRight key={product.id} addtoCart={addToCart} {...product} /> */
        )
      )}
    </div>
  );
}

export default App;
