import { useContext, useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import { https } from "../config/https";
import { AuthContext } from "../context/Auth";
import { toast } from "react-toastify/unstyled";

export const useActiveAccount = () => {

    const [active, setActive] = useState(false);
    const [param, setParam] = useSearchParams();
    const [email, setEmail] = useState('');

    const { login } = useContext(AuthContext);


    const navigate = useNavigate();

    const token = param.get('token')

    async function toggleActiveAccountToken() {

        setActive(false);

        try {
            
            await https.put(`${login[0].type === 'USER' ? 'user' : 'admin'}/active-account`, {
                token: token
            });
            toast.success('Conta ativada com sucesso!')
            navigate('/login')
            setActive(true)
        } catch (error) {
            console.log(error)
        }
    
    }


    async function toggleSubmitActiveAccount(event) {

        event.preventDefault();

        try {
            await https.post(`/${login[0].type === 'USER' ? 'user' : 'admin'}/send-active-account`,{
                login: email
            });
            
            toast.success("Foi enviado um link para ativação da sua conta")

        } catch (error) {
            toast.error('Não foi possivel enviar link para esse email!')
        }

    }

    useEffect(() => {
        toggleActiveAccountToken();
    }, [active])



    return { toggleSubmitActiveAccount, toggleActiveAccountToken, active, email, setEmail };

}