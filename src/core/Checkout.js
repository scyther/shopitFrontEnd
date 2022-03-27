import React, { useState } from "react";
import {
  Button,
  Card,
  Collapse,
  Input,
  Toast,
  ToastBody,
  ToastHeader,
} from "reactstrap";
import { isAuthenticated } from "../auth/helper";
import { emptyCart } from "./helper/coreapicalls";
import { createOrder } from "./helper/orderhelper";
import { Link } from "react-router-dom";
import { checkServicability } from "./helper/pincodeApiCalls";
// import StripeCheckout from "./payments/StripeCheckout";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

const Checkout = ({ products, setReload, reload = undefined }) => {
  const [collapse, setCollapse] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [pinCodeAvailable, setPinCodeAvailable] = useState(undefined);
  const { user, token } = isAuthenticated();
  // const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  const calculateAmount = () => {
    let amount = 0;
    products.map((p) => {
      return (amount = amount + p.price);
    });
    return amount;
  };
  const check = (pinCode) => {
    setPinCodeAvailable(checkServicability(pinCode));
    console.log(pinCodeAvailable);
    setShowToast(!showToast);
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
        products.length > 0 && (
          <>
            <Button
              onClick={() => setCollapse(!collapse)}
              style={{ marginBottom: "1rem" }}
            >
              Pay COD
            </Button>
            <Collapse isOpen={collapse}>
              <Card>
                <Input
                  placeholder="Enter Pincode"
                  type="number"
                  value={pinCode}
                  onChange={(e) => {
                    setPinCode(e.target.value);
                  }}
                />
                <Button
                  onClick={() => {
                    check(pinCode);
                  }}
                >
                  Submit
                </Button>
                {pinCodeAvailable ? (
                  <Toast isOpen={showToast}>
                    <ToastHeader>Pin-code Available</ToastHeader>
                    <ToastBody>
                      <Button onClick={handleCOD} color="success">Order Now</Button>
                    </ToastBody>
                  </Toast>
                ) : (
                  <Toast isOpen={showToast}>
                    <ToastHeader>Not Servicable</ToastHeader>
                    <ToastBody style={{ color: "grey" }}>
                      We Wil be available Soon in your area
                    </ToastBody>
                  </Toast>
                )}
              </Card>
            </Collapse>
          </>
        )
      )}
      {/* <Elements stripe={stripePromise}>
				<StripeCheckout />
			</Elements> */}
    </div>
  );
};

export default Checkout;
