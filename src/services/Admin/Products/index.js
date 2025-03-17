import { api } from "../../../lib/api";

export async function createProduct(data) {
	const { data: product } = await api.post(
		"/products/create",
		{ requiresAuth: true },
		data
	);

	return product;
}

export const getAllProducts = async () => {
	const { data } = await api.get("/products");

	return data;
};
