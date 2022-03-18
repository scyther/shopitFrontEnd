import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ListGroup, ListGroupItem} from "reactstrap";
import { isAuthenticated } from "../auth/helper";
import { getAllOrders } from "./helper/adminapicall";

const Order = ({ order }) => {
  return (
    <ListGroupItem>
      <div className="row">
        <span className="col-md-4">{order.name}</span>
        <span className="col-md-5">{order.description}</span>

        {/* <Button
					id={order._id}
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
				</Button> */}
      </div>
      {/* <div className='row mt-3 '>
				<div className='col align-self-end '>{Form}</div>
			</div> */}
    </ListGroupItem>
  );
};
const ManageOrders = () => {
  const { user, token } = isAuthenticated();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getAllOrders(user._id, token).then((data) => {
      if (data.error) {
        return toast.error(data.error);
      }
      setOrders(data);
    });
  }, [orders, user, token]);
  return (
    <>
      <div className="row">
        <h4>Manage Orders</h4>
      </div>
      {orders.length ? (
        <ListGroup>
          {orders.map((order, index) => (
            <Order key={index} order={order} />
          ))}
        </ListGroup>
      ) : (
        <h5>No Orders Placed</h5>
      )}
    </>
  );
};

export default ManageOrders;
