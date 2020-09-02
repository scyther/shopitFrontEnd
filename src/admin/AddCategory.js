import React, { useState } from "react";
import { Form, FormGroup, Label, Input, ButtonToggle } from "reactstrap";
import { createCategory } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategory = () => {
	const [name, setName] = useState("");
	const { user, token } = isAuthenticated();

	const handleChange = (event) => {
		setName(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		createCategory(user._id, token, { name }).then((data) => {
			if (data.error) {
				return toast.error(data.error);
			}
			toast.success("Category created Successfully");
			setName("");
		});
	};

	return (
		<div className='card'>
			<h4 className='card-header'>Create Category</h4>
			<Form inline className='p-4'>
				<FormGroup>
					<Label for='name'>Name</Label>
					{"  "}
					<Input
						id='name'
						type='text'
						value={name}
						onChange={handleChange}
						required
						placeholder='Ex. Summer Collection'></Input>
					{"  "}
					<ButtonToggle color='success' onClick={onSubmit}>
						Add Category
					</ButtonToggle>
				</FormGroup>
			</Form>
		</div>
	);
};

export default AddCategory;
