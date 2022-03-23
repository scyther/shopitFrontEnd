import React, { useState } from "react";
import ImageHelper from "./ImageHelper";
import { addProductTocart, removeProductFromcart } from "./helper/coreapicalls";
import { Redirect } from "react-router-dom";
// import { Input } from "reactstrap";

const ProductCard = ({
	product,
	addedtoCart,
	className = " card text-white bg-dark border border-secondary col-md-3 m-2",
	removeFromCart = false,
	setReload = (f) => f,
	//   function(f){return f}
	reload = undefined,
}) => {
	const [redirect, setRedirect] = useState(false);
	// const [count, setCount] = useState(product.count);

	const cartTitle = product ? product.name : "A photo from pexels";
	const cartDescrption = product ? product.description : "Default description";
	const cartPrice = product ? product.price : "DEFAULT";
	const addToCart = () => {
		addProductTocart(product, () => setRedirect(true));
	};

	const getARedirect = (redirect) => {
		if (redirect) {
			return <Redirect to='/cart' />;
		}
	};

	const showAddToCart = (addedtoCart) => {
		if (!addedtoCart) {
			return (
				<button
					onClick={addToCart}
					className='btn btn-block btn-outline-success mt-2 mb-2'>
					Add to Cart
				</button>
			);
		} else {
			return "";
		}
	};

	// const showCount = () => {
	// 	return (
	// 		count && (
	// 			<Input
	// 				type='number'
	// 				value={count}
	// 				onChange={(e) => {
	// 					setCount(e.target.value);
	// 				}}></Input>
	// 		)
	// 	);
	// };

	const showRemoveFromCart = (removeFromCart) => {
		return (
			removeFromCart && (
				<button
					onClick={() => {
						removeProductFromcart(product._id, () => {});
						setReload(!reload);
					}}
					className='btn btn-block btn-outline-danger mt-2 mb-2'>
					Remove from cart
				</button>
			)
		);
	};
	return (
		<div className={className}>
			<div className='card-header lead'>{cartTitle}</div>
			<div className='card-body'>
				{getARedirect(redirect)}
				<ImageHelper product={product} />
				<p className='lead bg-success font-weight-normal text-wrap'>
					{cartDescrption}
				</p>
				<p className='btn btn-success rounded  btn-sm px-4'>Rs. {cartPrice}</p>
				<div className='row'>
					<div className='col-12'>{showAddToCart(addedtoCart)}</div>
					{/* <div className='col-12'>{showCount()}</div> */}
					<div className='col-12'>{showRemoveFromCart(removeFromCart)}</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
