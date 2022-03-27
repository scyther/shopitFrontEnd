import React, { useState } from "react";
import ImageHelper from "./ImageHelper";
import {
  addProductTocart,
  addProductToWishList,
  removeProductFromcart,
  removeProductFromWishList,
} from "./helper/coreapicalls";
import { Redirect } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import { Input } from "reactstrap";

const ProductCard = ({
  product,
  addtoCart = true,
  addToWishlist = false,
  moveToCart = false,
  className = " card text-white bg-dark border border-light col-md-3 m-2",
  removeFromCart = false,
  setReload = (f) => f,
  //   function(f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(addToWishlist);
  // const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";
  const addToCart = () => {
    addProductTocart(product, () => setRedirect(true));
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
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
  const showMoveToCart = (moveToCart) => {
    return (
      moveToCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-warning mt-2 mb-2"
        >
          Move to Cart
        </button>
      )
    );
  };
  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeProductFromcart(product._id, () => {});
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  const wishList = (product) => {
    console.log(product);
    if (!addedToWishlist) {
      return addProductToWishList(product, () => {
        // setRedirectToWishList(true);
        setAddedToWishlist(true);
        setReload(!reload);
      });
    }
    removeProductFromWishList(product._id, () => {});
    setAddedToWishlist(false);
    setReload(!reload);
  };
  return (
    <div className={className}>
      <div className="card-header lead">
        <Container>
          <Row>
            <Col>{cartTitle}</Col>
            <Col>
              <Button
                onClick={() => wishList(product)}
                outline={true}
                style={{ border: "none" }}
              >
                {addedToWishlist ? (
                  <AiFillHeart fill="#D82E2F" />
                ) : (
                  <AiOutlineHeart />
                )}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cartDescrption}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">Rs. {cartPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showMoveToCart(moveToCart)}</div>
          {/* <div className='col-12'>{showCount()}</div> */}
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
