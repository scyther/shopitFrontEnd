import { API } from "../../backend";

export const getProducts = () => {
	return fetch(`${API}/products`)
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.error(err));
};

export const getPhoto = (productId) => {
	return fetch(`${API}/product/photo/${productId}`)
		.then((res) => res.json())
		.catch((error) => console.error(error));
};

export const addProductTocart = (item, next) => {
	let cart = [];
	if (typeof window !== "undefined") {
		if (localStorage.getItem("cart")) {
			cart = JSON.parse(localStorage.getItem("cart"));
		}
		cart.push({ ...item, count: 1 });
		localStorage.setItem("cart", JSON.stringify(cart));
		next();
	}
};

export const loadProducts = () => {
	if (typeof window !== "undefined") {
		if (localStorage.getItem("cart")) {
			return JSON.parse(localStorage.getItem("cart"));
		}
	}
};

export const removeProductFromcart = (itemId, next) => {
	let cart = [];
	if (typeof window !== "undefined") {
		if (localStorage.getItem("cart")) {
			cart = JSON.parse(localStorage.getItem("cart"));
			cart.map((product, index) => {
				if (product._id === itemId) {
					cart.splice(index, 1);
				}
				return cart;
			});
			localStorage.setItem("cart", JSON.stringify(cart));
		}

		next();
	}
};

export const emptyCart = (next) => {
	if (typeof window !== undefined) {
		if (localStorage.getItem("cart")) {
			localStorage.removeItem("cart");
			next();
		}
	}
};
