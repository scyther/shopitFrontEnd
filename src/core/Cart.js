import React, { useEffect } from "react";
import Base from "./Base";
import { useState } from "react";
import { loadProducts } from "./helper/coreapicalls";
import ProductCard from "./ProductCard";

const Cart = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(loadProducts());
	}, []);

	const productList = () =>
		products.map((product) => (
			<ProductCard key={product._id} product={product} addtoCart='false' />
		));

	const checkout = () => {
		return <h1>Checkout Here</h1>;
	};

	return (
		<Base title='Cart' description='Proceed to Checkout'>
			<div className='row'>
				<div className='col-6'>{productList()}</div>
				<div className='col-6'>{checkout()}</div>
			</div>
		</Base>
	);
};

export default Cart;
