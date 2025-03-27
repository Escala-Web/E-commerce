import { api } from "../../../lib/api";

export async function createProduct(data) {
	

	const { data: product } = await api.post("/products/create",
		data,
		{ requiresAuth: true }
	);

	return product;
}

export const getAllProducts = async () => {
	const { data } = await api.get("/products/1");

	return data;
};

export const getAllBy = async (params, id, page) => {
	const { data: product } = await api.get(`/products/get-all-by/${params}/${id}/${page}`);
	return product;
}
