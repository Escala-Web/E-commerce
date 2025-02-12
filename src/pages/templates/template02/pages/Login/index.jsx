import { Link } from "react-router-dom";
import { Formulario } from "../../../template01/components/Formulario";
import { Container, ContainerFormulario, ContainerRegister } from "./styles";
import { useLogin } from "../../../../../hooks/useLogin";
import { useState } from "react";


export const LoginTemplete02 = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {onSubmit} = useLogin(email, password);


	return (
		<>
			<Container>
				<ContainerRegister>Registre-se</ContainerRegister>
				<ContainerFormulario>
					<Formulario submit={onSubmit} w="80%">
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
                        <Link to="/esqueci-senha">Recuperar senha</Link>
                        <button style={{marginTop: '20px'}}>Entrar</button>
					</Formulario>
				</ContainerFormulario>
			</Container>
		</>
	);
};
