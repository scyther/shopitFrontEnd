import React, { useState } from "react";
import {
	Card,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from "reactstrap";
import ImageHelper from "./ImageHelper";
import { addProductTocart, removeProductFromcart } from "./helper/coreapicalls";
import { Redirect } from "react-router-dom";

const ProductCard = ({ product }) => {
	const [addtoCart, setAddtoCart] = useState(true);
	return (
		<Card className='bg-dark border-success'>
			<ImageHelper product={product} />
			<CardBody>
				<CardTitle>{product.name}</CardTitle>
				<CardSubtitle>Price : Rs.{product.price}</CardSubtitle>
				<CardText>{product.description}</CardText>
				{addtoCart ? (
					<Button
						className='m-2 bg-success border-dark'
						onClick={() => {
							setAddtoCart(!addtoCart);
							addProductTocart(product, () => {
								return <Redirect to='/cart' />;
							});
						}}>
						Add to Cart
					</Button>
				) : (
					<Button
						className='bg-danger border-dark'
						onClick={() => {
							setAddtoCart(!addtoCart);
							removeProductFromcart(product, () => {});
						}}>
						Remove Item
					</Button>
				)}
			</CardBody>
		</Card>
	);
};

export default ProductCard;
