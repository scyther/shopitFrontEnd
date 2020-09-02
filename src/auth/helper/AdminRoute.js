import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from ".";

const AdminRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuthenticated() && isAuthenticated().user.role === 1 ? (
					<Component />
				) : (
					<Redirect
						to={{
							pathname: "/signin",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default AdminRoute;
