import React from "react";
import { isAuthenticated } from "../auth/helper";

const DefaultPage = () => {
	const { name, email } = isAuthenticated().user;
	return (
		<div className='card'>
			<h4 className='card-header'>Admin Panel</h4>
			<ul className='listgroup'>
				<li className='listgroup-item'>
					<span className='badge badge-success'>Name</span>
					{name}
				</li>
				<li className='listgroup-item'>
					<span className='badge badge-success'>Email</span>
					{email}
				</li>
			</ul>
		</div>
	);
};

export default DefaultPage;
