import React, { useState } from "react";
import Base from "../core/Base";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { signup } from "../auth/helper/index";
import { Link } from "react-router-dom";

const Signup = () => {
	const [values, setValues] = useState({
		email: "",
		name: "",
		password: "",
		error: "",
		success: false,
	});
	const { email, name, password, error, success } = values;

	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false });
		signup({ name, email, password })
			.then((data) => {
				if (data.error) {
					setValues({ ...values, error: data.error, success: false });
				} else {
					setValues({
						...values,
						name: "",
						password: "",
						email: "",
						error: "",
						success: true,
					});
				}
			})
			.catch((error) => console.log(error));
	};

	const signupForm = () => (
		<Form className='container offset-md-3 col-md-6  '>
			<FormGroup>
				<Label for='Name'>Name</Label>
				<Input
					type='name'
					name='name'
					id='Name'
					placeholder='Enter Your Name'
					className='form-control'
					onChange={handleChange("name")}
					value={name}
				/>
			</FormGroup>
			<FormGroup>
				<Label for='Email'>Email</Label>
				<Input
					type='email'
					name='email'
					id='Email'
					placeholder='Enter Your Email'
					onChange={handleChange("email")}
					value={email}
				/>
			</FormGroup>
			<FormGroup>
				<Label for='Password'>Password</Label>
				<Input
					type='password'
					name='password'
					id='Password'
					placeholder='Enter Password'
					onChange={handleChange("password")}
					value={password}
				/>
			</FormGroup>
			<Button onClick={onSubmit}>Submit</Button>
		</Form>
	);

	const successMessage = () => {
		return (
			<div
				className='alert alert-success'
				style={{ display: success ? "" : "none" }}>
				New Account created Succesfully. <Link to='/signin'>Login Here</Link>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div
				className='alert alert-danger'
				style={{ display: error ? "" : "none" }}>
				{error}
			</div>
		);
	};

	return (
		<Base title='SignUp' description='Signup Page'>
			{successMessage()}
			{errorMessage()}
			{signupForm()}
		</Base>
	);
};

export default Signup;
