import React from "react";
import { Button } from "reactstrap";
import { isAuthenticated } from "../auth/helper";
import { emptyCart } from "./helper/coreapicalls";
import { createOrder } from "./helper/orderhelper";
import { Link } from "react-router-dom";
// import StripeCheckout from "./payments/StripeCheckout";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

const Checkout = ({ products, setReload, reload = undefined }) => {
  const { user, token } = isAuthenticated();
  // const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  const calculateAmount = () => {
    let amount = 0;
    products.map((p) => {
      return (amount = amount + p.price);
    });
    return amount;
  };
  const handleCOD = () => {
    const orderData = {
      products: products,
      // transaction_id: response.transaction.id,
      amount: calculateAmount(),
    };
    createOrder(user._id, token, orderData);
    emptyCart(() => {
      console.log("Did we got a crash?");
    });
    setReload(!reload);
  };
  return (
    <div>
      <h2>
        {" "}
        {products && products.length > 0
          ? `Your Total Amount is Rs. ${calculateAmount()}`
          : "Add Something into the Cart "}{" "}
      </h2>
      {!user ? (
        <>
          Please Login First
          {
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          }
        </>
      ) : (
        products &&
        products.length > 0 && <Button onClick={handleCOD}>Pay COD</Button>
      )}
      {/* <Elements stripe={stripePromise}>
				<StripeCheckout />
			</Elements> */}
    </div>
  );
};

export default Checkout;
