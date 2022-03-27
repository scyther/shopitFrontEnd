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

export const addProductToWishList = (item, next) => {
	let wishList = [];
	let tempwishList = []
	if (typeof window !== "undefined") {
		if (localStorage.getItem("wishList")) {
			tempwishList = JSON.parse(localStorage.getItem("wishList"));
		}
		tempwishList.push({...item});
		wishList = Array.from(new Set(tempwishList))
		localStorage.setItem("wishList", JSON.stringify(wishList));
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

export const loadWishListProducts = () => {
	if (typeof window !== "undefined") {
		if (localStorage.getItem("wishList")) {
			return JSON.parse(localStorage.getItem("wishList"));
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

export const removeProductFromWishList = (itemId, next) => {
	let wishList = [];
	if (typeof window !== "undefined") {
		if (localStorage.getItem("wishList")) {
			wishList = JSON.parse(localStorage.getItem("wishList"));
			wishList.map((product, index) => {
				if (product._id === itemId) {
					wishList.splice(index, 1);
				}
				return wishList;
			});
			localStorage.setItem("wishList", JSON.stringify(wishList));
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
