import React, { useState, useEffect } from "react";
import {
	Form,
	FormGroup,
	Label,
	Input,
	ButtonToggle,
	FormText,
	option,
} from "reactstrap";
import { toast } from "react-toastify";
import {
	updateProduct,
	getCategories,
	getProduct,
} from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper";

const UpdateProductForm = ({ product }) => {
	const [values, setValues] = useState({
		name: "",
		price: "",
		photo: "",
		createdProduct: "",
		description: "",
		stock: "",
		categories: [],
		category: "",
		formdata: "",
	});

	const {
		name,
		price,
		description,
		stock,
		categories,
		formdata,
		category,
		createdProduct,
	} = values;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const preload = () => {
		getCategories().then((data) => {
			if (data.error) {
				return console.log(data.error);
			}
			setValues({
				...values,
				categories: data,
				formdata: new FormData(),
			});
		});

		getProduct(product._id).then((data) => {
			if (data.error) {
				toast.error("Unable to get Product Details");
			} else {
				setValues({
					...values,
					name: product.name,
					price: product.price,
					description: product.description,
					stock: product.stock,
					category: product.category,
					formdata: new FormData(),
				});
			}
		});
	};

	useEffect(() => {
		preload();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = (name) => (event) => {
		const value = name === "photo" ? event.target.files[0] : event.target.value;

		setValues({
			...values,
			[name]: value,
			formdata: new FormData(),
		});
		formdata.set(name, value);
	};

	const { user, token } = isAuthenticated();

	const onSubmit = (event) => {
		event.preventDefault();
		updateProduct(product._id, user._id, token, formdata).then((data) => {
			console.log(data);
			if (data.error) {
				toast.error(data.error);
			} else {
				setValues({
					...values,
					name: "",
					price: "",
					description: "",
					stock: "",
					photo: "",
					createdProduct: data.name,
				});

				toast.success(`${createdProduct} Product updated Successfully`);
			}
		});
	};

	const ProductForm = () => (
		<div className='card center'>
			<h4 className='card-header'>Update Product</h4>

			<Form className='p-4' id='form'>
				<FormGroup>
					<Label for='name'>Name</Label>

					<Input
						id='name'
						type='text'
						value={name}
						onChange={handleChange("name")}
						required
						placeholder='Product Name'></Input>
				</FormGroup>
				<FormGroup>
					<Label for='price'>Price</Label>

					<Input
						id='price'
						type='number'
						value={price}
						onChange={handleChange("price")}
						required></Input>
				</FormGroup>
				<FormGroup>
					<Label for='description'>description</Label>

					<Input
						id='description'
						type='text'
						value={description}
						onChange={handleChange("description")}
						required
						placeholder='About Product'></Input>
				</FormGroup>
				<FormGroup>
					<Label for='category'>Select Category</Label>
					<Input
						type='select'
						name='select'
						id='category'
						value={category}
						onChange={handleChange("category")}>
						{categories &&
							categories.map((cate, index) => (
								<option key={index} id={cate._id}>
									{cate.name}
									{formdata.set("category", cate._id)}
								</option>
							))}
					</Input>
				</FormGroup>
				<FormGroup>
					<Label for='stock'>stock</Label>
					<Input
						id='stock'
						type='number'
						value={stock}
						onChange={handleChange("stock")}
						required
						placeholder='Ex. 1,2....10'></Input>
				</FormGroup>
				<FormGroup>
					<Label for='File'>File</Label>
					<Input
						type='file'
						name='file'
						id='File'
						accept='image'
						onChange={handleChange("photo")}
					/>
					<FormText color='muted'>upload Image</FormText>
				</FormGroup>

				<ButtonToggle color='success' onClick={onSubmit}>
					Update product
				</ButtonToggle>
			</Form>
		</div>
	);

	return <ProductForm />;
};

export default UpdateProductForm;
