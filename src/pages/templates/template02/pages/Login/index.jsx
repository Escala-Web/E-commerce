import { Link } from "react-router-dom";
import { Formulario } from "../../../template01/components/Formulario";
import { ButtonRegister, Container, ContainerFormulario, ContainerRegister, ContainerRegisterContent } from "./styles";
import { useLogin } from "../../../../../hooks/useLogin";
import { useState } from "react";
import { HiMiniArrowLeftCircle } from "react-icons/hi2";


export const LoginTemplete02 = ({user}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {onSubmitAdmin, onSubmitUser} = useLogin(email, password);

	return (
		<>
			<Container>
				<ContainerRegister>

                    <ContainerRegisterContent>
                        <h4 className="register-title">Crie sua conta e aproveite benefícios exclusivos!</h4>
                        <p className="register-subtitle">Cadastre-se rapidamente para ter acesso a descontos especiais, novidades e uma experiência de compra ainda mais personalizada. É rápido, fácil e você vai adorar!</p>
                    </ContainerRegisterContent>


                    <ButtonRegister>
                        <Link to='/registrar' className="register-button">Cadastra-se</Link>
                    </ButtonRegister>

                </ContainerRegister>    
				<ContainerFormulario>

                    <Link to='/' className="back">
                        <HiMiniArrowLeftCircle className="icon-back"/>
                        Voltar  
                    </Link>

					<Formulario submit={user === 'user' ? onSubmitUser : onSubmitAdmin} w="80%">
                        <h2>Entrar</h2>
						<label>E-mail</label>
						<input 
                            placeholder="E-mail"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <label>Senha</label>
						<input 
                            placeholder="******"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <p className="content-reset-password">Esqueceu sua senha? 
                            <Link className="link-reset-password" to="/esqueci-senha"> Clique aqui</Link>
                        </p>
                        <button style={{marginTop: '10px'}}>Entrar</button>
					</Formulario>
				</ContainerFormulario>
			</Container>
		</>
	);
};
