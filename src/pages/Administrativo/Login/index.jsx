import { useNavigate } from "react-router-dom"
import { Button } from "../../../components/Button"
import { Formulario } from "../../../components/Formulario"
import { Input } from "../../../components/Input"

export const LoginPage = () => {

    const navigate = useNavigate()

    function submit(event) {
        event.preventDefault();

        console.log(event.target)
        navigate('/administrativo')
    }

    return (
        <>
        
            <Formulario title='Login' w='40%' submit={submit}>
                <Input 
                    placeholder='Email'
                    label='E-mail'
                />
                <Input 
                    placeholder='********'
                    label='Senha'
                    type='password'
                />

                <Button name='Entrar' margin='1rem 0 0'/>
            </Formulario>
        </>
    )
}