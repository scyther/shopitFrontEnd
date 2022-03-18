import React, { useState } from "react";
import Base from "../core/Base";
import AddCategory from "../admin/AddCategory";
import DefaultPage from "../admin/DefaultPage";
import AddProduct from "../admin/AddProduct";
import ManageProducts from "../admin/ManageProducts";
import ManageOrders from "../admin/ManageOrders";

const AdminDashBoard = () => {
	const [rightPage, setRightPage] = useState(<DefaultPage />);

	const leftSide = () => (
		<div className='card '>
			<h4
				className='card-header '
				style={{ cursor: "pointer" }}
				onClick={() => {
					setRightPage(<DefaultPage />);
				}}>
				Admin Info
			</h4>
			<ul className='list-group'>
				<li className='list-group-item'>
					<span
						className='nav-link text-success'
						style={{ cursor: "pointer" }}
						onClick={() => {
							setRightPage(<AddCategory />);
						}}>
						Create Category
					</span>
				</li>

				<li className='list-group-item'>
					<span
						className='nav-link text-success'
						style={{ cursor: "pointer" }}
						onClick={() => {
							setRightPage(<AddProduct />);
						}}>
						Add Product
					</span>
				</li>
				<li className='list-group-item'>
					<span
						className='nav-link text-success'
						style={{ cursor: "pointer" }}
						onClick={() => {
							setRightPage(<ManageProducts />);
						}}>
						Manage Products
					</span>
				</li>
				<li className='list-group-item'>
				<span
						className='nav-link text-success'
						style={{ cursor: "pointer" }}
						onClick={() => {
							setRightPage(<ManageOrders />);
						}}>
						Manage Orders
					</span>
				</li>
			</ul>
		</div>
	);

	const rightSide = () => {
		return rightPage;
	};
	return (
		<Base
			title='Admin-DashBoard'
			description='Welcome Admin'
			className='container bg-success p-4 m-4'>
			<div className='row  '>
				<div className='col-md-3 '>{leftSide()}</div>
				<div className='col-md-9 mt-3'>{rightSide()}</div>
			</div>
		</Base>
	);
};

export default AdminDashBoard;
