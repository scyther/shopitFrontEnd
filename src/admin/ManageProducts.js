import React, { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "./helper/adminapicall";
import { toast } from "react-toastify";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { isAuthenticated } from "../auth/helper";
import UpdateProductForm from "./UpdateProductForm";

const Product = ({ product }) => {
	const { user, token } = isAuthenticated();
	const [Form, setForm] = useState(<span></span>);

	const deleteThisProduct = (product) => {
		deleteProduct(product._id, user._id, token).then((data) => {
			if (data.error) {
				return toast.error(data.error);
			}
			toast.success(product.name + " deleted Successfully");
		});
	};
	return (
		<ListGroupItem>
			<div className='row'>
				<span className='col-md-4'>{product.name}</span>
				<span className='col-md-5'>{product.description}</span>

				<Button
					id={product._id}
					className='col-md-1 mr-1 p-1'
					color='success'
					onClick={() => {
						setForm(<UpdateProductForm product={product} />);
					}}>
					Update
				</Button>
				<Button
					className='col-md-1 p-1 col-sm-6'
					color='danger'
					onClick={() => {
						deleteThisProduct(product);
					}}>
					Delete
				</Button>
			</div>
			<div className='row mt-3 '>
				<div className='col align-self-end '>{Form}</div>
			</div>
		</ListGroupItem>
	);
};

const ManageProducts = () => {
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
	}, [products]);

	return (
		<>
			<div className='row'>
				<h4>
					{!products.length
						? "Manage Products"
						: `Manage Products (${products.length})`}
				</h4>
			</div>
			<ListGroup>
				{products.map((product, index) => (
					<Product key={index} product={product}></Product>
				))}
			</ListGroup>
		</>
	);
};

export default ManageProducts;
