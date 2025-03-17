import { useContext, useState } from "react";
import { AuthContext } from "../context/Auth";
import { Navigate, useNavigate } from "react-router-dom";
import { https } from "../config/https";
import { toast } from "react-toastify";

export const useLogin = (email, password) => {

	const { setLogin, setRole } = useContext(AuthContext);
	const navigate = useNavigate();

	const { logout } = useContext(AuthContext);

	async function onSubmitAdmin(event) {
		event.preventDefault();
		try {
			const { data } = await https.post("/admin/login", {
				email: email,
				password: password,
			});

			if(data.firstAccess) {
				navigate('/active-account?first-access');
				return;
			}

			const userLogin = [
				{
					token: data.token,
					user: data.user,
					type: data.type,
					rule: data.rule
				},
			];

			setLogin(userLogin);
			setRole(data.rule)
			localStorage.setItem("userLogin", JSON.stringify(userLogin));

			navigate("/administrativo");

			toast.success(data.message);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	}

	async function onSubmitUser(event) {
		event.preventDefault();
		try {
			const { data } = await https.post('/user/login', {
				'login': email,
				'password': password,
				'type': "EMAIL"
			});


			const userLogin = [
				{
					token: data.token,
					user: data.name,
					type: data.type,
					rule: data.rule
				},
			];
			
			setLogin(userLogin);
			localStorage.setItem("userLogin", JSON.stringify(userLogin));
		

			if(data.firstAccess) {
				toast.success(data.message);
				navigate('/active-account?fisrt-access')
				// return
			}

	

			
			toast.success(data.message)

			navigate('/custumer/meus-pedidos')
		} catch (error) {
			toast.error(error);
		}
	}

	function toggleLogout() {
		logout()
		navigate('/')
		toast.success('Até mais')
	}

    return { onSubmitAdmin, onSubmitUser, toggleLogout }


};
