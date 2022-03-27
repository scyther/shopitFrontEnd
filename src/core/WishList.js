import React, { useEffect } from "react";
import Base from "./Base";
import { useState } from "react";
import { loadWishListProducts } from "./helper/coreapicalls";
import ProductCard from "./ProductCard";

const WishList = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadWishListProducts() ? loadWishListProducts() : []);
  }, [reload]);

  const productList = () =>
    products.map((product) => (
      <ProductCard
        key={product._id}
        product={product}
        addToWishlist={true}
        moveToCart={true}
        addtoCart={false}
        setReload={setReload}
        reload={reload}
      />
    ));

  return (
    <Base title="WishList" description="Move Your WishListed Items into Cart">
   <div className="row" style={{minHeight: '200px' , justifyContent:'center'}}>
          {products.length !== 0 ? (
            productList()
          ) : (
            <h3
              className="border border-success rounded-pill"
              style={{ padding: "20px", background: "#28A745",alignItems:'center' ,paddingTop: 80}}
            >
              No Products Added to WishList
            </h3>
          )}
        </div>
    </Base>
  );
};

export default WishList;
