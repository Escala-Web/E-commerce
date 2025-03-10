import { useMutation, useQueryClient } from "@tanstack/react-query";
import { https } from "../../config/https";


async function createVariant({name}) {

    const token = JSON.parse(localStorage.getItem('userLogin'));

	try {
		const { data } = await https.post(
			"/variations/create-variation",
			{
				name: name,
			},
			{
				headers: {
					Authorization: `Bearer ${token[0].token}`
				}
			}
		);
		return data;
	} catch (error) {
		return error;
	}
}
export const useCreateVariant = () => {

	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: createVariant,
		onSuccess: (data) => {
			queryClient.invalidateQueries("variants");
    
		},
		onError: (error) => {
			console.log(error);
		},
	});
};
