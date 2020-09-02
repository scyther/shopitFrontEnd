import { API } from "../../backend";

//category API Calls
export const createCategory = (userId, token, category) => {
	return fetch(`${API}/category/create/${userId}`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(category),
	})
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
		});
};

export const getCategories = () => {
	return fetch(`${API}/categories`, { method: "GET" })
		.then((res) => res.json())
		.catch((err) => console.log(err));
};

//Product API Calls

export const createProduct = (userId, token, product) => {
	return fetch(`${API}/product/create/${userId}`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: product,
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));
};

export const getProducts = () => {
	return fetch(`${API}/products`, { method: "GET" })
		.then((res) => res.json())
		.catch((err) => console.log(err));
};

export const getProduct = (productId) => {
	return fetch(`${API}/product/${productId}`, { method: "GET" })
		.then((res) => res.json())
		.catch((err) => console.log(err));
};

export const updateProduct = (productId, userId, token) => {
	return fetch(`${API}/product/${productId}/${userId}`, {
		method: "PUT",
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));
};

export const deleteProduct = (productId, userId, token, product) => {
	return fetch(`${API}/product/${productId}/${userId}`, {
		method: "DELETE",
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: product,
	})
		.then((res) => res.json)
		.catch((err) => console.log(err));
};
