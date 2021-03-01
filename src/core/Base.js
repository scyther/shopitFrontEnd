import React from "react";
import Menu from "./Menu";
import { ToastContainer } from "react-toastify";

const Base = ({
	title = "My Title",
	description = "My desription",
	className = "bg-dark text-white p-4",
	children,
}) => (
	<div>
		<Menu />
		<div className='container-fluid'>
			<div className='jumbotron bg-dark text-white text-center'>
				<h2 className='display-4'>{title}</h2>
				<p className='lead'>{description}</p>
			</div>
			<ToastContainer position='top-center' />
			<div className={className}>{children}</div>
		</div>
		<footer className='footer bg-dark py-3'>
			<div className='container-fluid bg-success text-white text-center py-3'>
				<h4>If you got any questions, feel free to reach out!</h4>
				<button className='btn btn-warning btn-lg'>Contact Us</button>
			</div>
			<div className='container'>
				<span className='text-muted'>
					Copyright © 2021 Chirag. All rights reserved.
				</span>
			</div>
		</footer>
	</div>
);

export default Base;