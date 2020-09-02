import React from "react";
import { CardImg } from "reactstrap";
import { API } from "../backend";

const ImageHelper = ({ product }) => {
	const imageURL = `${API}/product/photo/${product._id}`;

	return (
		<CardImg top width='100%' src={imageURL} alt='Product Image Not loaded' />
	);
};

export default ImageHelper;
