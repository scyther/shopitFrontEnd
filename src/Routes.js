import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles.css";

import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoute";
import PrivateRoute from "./auth/helper/PrivateRoute";
import AdminDashBoard from "./user/AdminDashBoard";
import UserDashBoard from "./user/UserDashBoard";
import Cart from "./core/Cart";
import WishList from "./core/WishList";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/signup' component={Signup} />
				<Route path='/signin' component={Signin} />
				<Route path='/cart' component={Cart} />
				<Route path='/wishList' component={WishList} />
				<AdminRoute path='/admin/dashboard'>
					<AdminDashBoard />
				</AdminRoute>
				<PrivateRoute path='/user/dashboard'>
					<UserDashBoard />
				</PrivateRoute>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
