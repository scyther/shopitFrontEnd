import Base from "./Base";
import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";

import { getProducts, loadWishListProducts } from "./helper/coreapicalls";
import { toast } from "react-toastify";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [wishListProducts, setWishListProducts] = useState([])
  const [loading, setloading] = useState(true);

  const preload = () => {
    setWishListProducts(loadWishListProducts() ? loadWishListProducts().map(item => item._id) : [])
    getProducts()
      .then((data) => {
        if (data.error) {
          return toast.error(data.error);
        }
        setProducts(data);
        console.log(data);
        setloading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    preload();
  }, []);
  return (
    <Base title="Home" description="Welcome to our Online Store">
      <div className="row" style={{minHeight: '200px' , justifyContent:'center'}}>
        {loading ? (
          <Spinner color="primary" style={{margin: 'auto'}}>
            Loading...
          </Spinner>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              addtoCart={true}
              addToWishlist= {wishListProducts.find((item) => item === product._id) ? true : false}
            />
          ))
        )}
      </div>
    </Base>
  );
};

export default Home;
