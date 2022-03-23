import Base from "./Base";
import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";

import { getProducts } from "./helper/coreapicalls";
import { toast } from "react-toastify";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);

  const preload = () => {
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
      <div className="row" style={{minHeight: '200px'}}>
        {loading ? (
          <Spinner color="primary" style={{margin: 'auto'}}>
            Loading...
          </Spinner>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              addtoCartButton="true"
            />
          ))
        )}
      </div>
    </Base>
  );
};

export default Home;
