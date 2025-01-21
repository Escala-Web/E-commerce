import { Link, useNavigate } from "react-router-dom";
import { Formulario } from "../../components/Formulario";
import { Container, ContainerInfoRegister, ContainerInfos, ContainerLogin, LinkEsqueciASenha, RegisterImage } from "./styles";
import registra from '../../../../../assets/registrar.png';
import { useContext, useEffect, useState } from "react";
import { https } from "../../../../../config/https";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../../context/Auth";

export const LoginPageTemplate01 = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const { data } = await https.post('/admin/login', {
                email: email,
                password: password
            })

            console.log(data)
            const userLogin = [
                {
                    token: data.token,
                    user: data.user
                }
            ]
            
            setLogin(userLogin);
            localStorage.setItem('userLogin', JSON.stringify(userLogin));

            navigate('/administrativo')

            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    

	return (
		<>
			<Container>
				<ContainerInfos>
                    <ContainerInfoRegister>
                        <img src={registra}/>
                    </ContainerInfoRegister>
                </ContainerInfos>
				<ContainerLogin>
					<Formulario submit={onSubmit} w='60%' p="4rem 2rem" title="Login">
						<input 
                            placeholder="E-mail" 
                            name="email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                             />

						<input 
                            placeholder="Senha" 
                            name="password" 
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            />
                        
                        <LinkEsqueciASenha>Esqueci a senha</LinkEsqueciASenha>
                        <button>Entrar</button>
					</Formulario>
				</ContainerLogin>
			</Container>
		</>
	);
};
