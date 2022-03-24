import React, { useEffect } from "react";
import Base from "./Base";
import { useState } from "react";
import { loadProducts } from "./helper/coreapicalls";
import ProductCard from "./ProductCard";
import Checkout from "./Checkout";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadProducts());
  }, [reload]);

  const productList = () =>
    products.map((product) => (
      <ProductCard
        key={product._id}
        product={product}
        className="col-md-6 mb-2"
        addtoCart={false}
        removeFromCart={true}
        setReload={setReload}
        reload={reload}
      />
    ));

  return (
    <Base title="Cart" description="Proceed to Checkout">
      <div className="row" style={{ minHeight: "200px" }}>
        <div className="col-6">
          {products ? (
            productList()
          ) : (
            <h3 className="text-center border border-success rounded-pill ">
              No Products Added
            </h3>
          )}
        </div>
        <div className="col-6">
          {products && <Checkout products={products} setReload={setReload} />}
        </div>
      </div>
    </Base>
  );
};

export default Cart;
