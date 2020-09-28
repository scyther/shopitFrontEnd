import { API } from "../../backend";

export const createOrder = (userId, token, orderData) => {
	return fetch(`${API}/order/create/${userId}`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			ContentType: "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(orderData),
	})
		.then((response) => response.json())
		.catch((error) => console.log(error));
};
