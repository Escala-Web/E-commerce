import { useState } from "react"
import { Formulario } from "../../components/Formulario"
import { Container, ContainerInfos } from "../Login/styles"
import { https } from "../../../../../config/https";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ContainerForm } from "./styles";

import imageReset from '../../../../../assets/reset-pass.png';

export const ResetPassword = () => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    async function resetPasswordSubmit(event) {

        event.preventDefault();

        try {
            const {data} = await https.post('/admin/forget-password', {
                email
            })
            navigate('/login')
            toast.success(data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }

    }

    return (
        <>
            <Container>
                <ContainerInfos>
                    <img src={imageReset} alt="Resetar senha"/>
                </ContainerInfos>
                <ContainerForm>
                <Formulario submit={resetPasswordSubmit} w="80%" title="Recuperar senha">
                    <input 
                        placeholder="Digite um E-mail*"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <button>Enviar</button>
                </Formulario>
                </ContainerForm>
            </Container>
        </>
    )

}