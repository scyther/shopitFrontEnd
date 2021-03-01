import React, { useState } from "react";
import Base from "../core/Base";
import { Redirect } from "react-router-dom";

import { signin, authenticate, isAuthenticated } from "../auth/helper";
import { toast } from "react-toastify";

const Signin = () => {
	const [values, setValues] = useState({
		email: "",
		password: "",

		loading: false,
		didRedirect: false,
	});

	const { email, password, loading, didRedirect } = values;
	const { user } = isAuthenticated();

	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, loading: true });
		signin({ email, password })
			.then((data) => {
				if (data.error) {
					setValues({ ...values, loading: false });
					toast.error(data.error);
				} else {
					authenticate(data, () => {
						setValues({
							...values,
							didRedirect: true,
							loading: false,
						});
						toast.success("Account Created Succesfully");
					});
				}
			})
			.catch(console.log("signin request failed"));
	};

	const performRedirect = () => {
		//TODO: do a redirect here
		if (didRedirect) {
			if (user && user.role === 1) {
				return <Redirect to='/admin/dashboard' />;
			} else {
				return <Redirect to='/user/dashboard' />;
			}
		}
		if (isAuthenticated()) {
			return <Redirect to='/' />;
		}
	};

	const loadingMessage = () => {
		return (
			loading && (
				<div className='alert alert-info col-md-4'>
					<h2>Loading...</h2>
				</div>
			)
		);
	};

	const signInForm = () => {
		return (
			<div className='row '>
				<div className='col-md-4 offset-md-4 bg-dark mb-3 p-3  rounded'>
					<h2 className='text-white text-center '>Sign In Here</h2>
					<form>
						<div className='form-group'>
							<label className='text-light'>Email</label>
							<input
								onChange={handleChange("email")}
								value={email}
								className='form-control'
								type='email'
							/>
						</div>

						<div className='form-group'>
							<label className='text-light'>Password</label>
							<input
								onChange={handleChange("password")}
								value={password}
								className='form-control'
								type='password'
							/>
						</div>
						<button onClick={onSubmit} className='btn btn-success btn-block'>
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	};

	return (
		<Base
			title='Sign In page'
			description='A page for user to sign in!'
			className=''>
			{loadingMessage()}
			{signInForm()}
			{performRedirect()}
		</Base>
	);
};

export default Signin;
