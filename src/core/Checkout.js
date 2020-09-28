import React from "react";
// import StripeCheckout from "./payments/StripeCheckout";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

const Checkout = ({ products }) => {
	// const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
	const calculateAmount = () => {
		let amount = 0;
		products.map((p) => {
			return (amount = amount + p.price);
		});
		return "Your Total Bill is: " + amount + " $";
	};
	return (
		<div>
			<h2>
				{" "}
				{products && products.length > 0
					? calculateAmount()
					: "Add Something into the Cart "}{" "}
			</h2>
			{/* <Elements stripe={stripePromise}>
				<StripeCheckout />
			</Elements> */}
		</div>
	);
};

export default Checkout;
