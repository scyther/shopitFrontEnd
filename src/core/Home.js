import Base from "./Base";
import React, { useState, useEffect } from "react";

import { getProducts } from "./helper/coreapicalls";
import { toast } from "react-toastify";
import ProductCard from "./ProductCard";

const Home = () => {
	const [products, setProducts] = useState([]);

	const preload = () => {
		getProducts().then((data) => {
			if (data.error) {
				return toast.error(data.error);
			}
			setProducts(data);
		});
	};

	useEffect(() => {
		preload();
	}, []);
	return (
		<Base title='Home' description='Wecome To the Tshirt Store'>
			<div className='row'>
				{products.map((product) => (
					<div className='col-md-4 m-2'>
						<ProductCard key={product._id} product={product} />
					</div>
				))}
			</div>
		</Base>
	);
};

export default Home;
