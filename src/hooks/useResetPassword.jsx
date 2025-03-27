import { useNavigate, useSearchParams } from "react-router-dom";
import { https } from "../config/https";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/Auth";

export const useResetPassword = (password) => {

    const [param, setParam] = useSearchParams();
    const navigate = useNavigate();

    const token = param.get('token');

    const { login } = useContext(AuthContext);

    async function resetPassword() {

        console.log(login)

        try {
            const { data } = await https.put(`/${login[0].type === 'USER' ? 'user' : 'admin'}/reset-password`, {
                token: token,
                password: password
            });
            navigate('/login');
            toast.success(data.message);

            console.log(data)

        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }

    }


    return { resetPassword };

}