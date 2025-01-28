import { useContext, useState } from "react";
import { AuthContext } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import { https } from "../config/https";
import { toast } from "react-toastify";

export const useLogin = (email, password) => {

	const { setLogin } = useContext(AuthContext);
	const navigate = useNavigate();

	async function onSubmit(event) {
		event.preventDefault();
		try {
			const { data } = await https.post("/admin/login", {
				email: email,
				password: password,
			});

			console.log(data);
			const userLogin = [
				{
					token: data.token,
					user: data.user,
				},
			];

			setLogin(userLogin);
			localStorage.setItem("userLogin", JSON.stringify(userLogin));

			navigate("/administrativo");

			toast.success(data.message);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	}

    return { onSubmit }


};
