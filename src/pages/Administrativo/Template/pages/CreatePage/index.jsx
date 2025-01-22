import { useContext } from "react";
import { ThemeColorContext } from "../../../../../context/ThemeContext";
import { Container, ContainerLink } from "../Conteudo/styles";
import { HeaderTemplateEditor } from "../../components/Header";
import { ButtonTemplate } from "../../components/Button";
import { Form } from "../../../components/Form";
import { SubmitButton } from "../../../components/Formulario/styles";

import jsonPages from '../../../../../../public/pages.json'
import axios from "axios";
export const CreatePageAdministrador = () => {
    const { setTheme } = useContext(ThemeColorContext);

    async function submit(event) {
        event.preventDefault();
        try {
            
            const { data } = await axios.post(jsonPages, {
                page: 'Home',
                link: '/'
            })

            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <Container>
                <HeaderTemplateEditor>
                    <ButtonTemplate click={() => setTheme("black")}>
                        Tema Preto
                    </ButtonTemplate>
                    <ButtonTemplate click={() => setTheme("green")}>
                        Tema Verde
                    </ButtonTemplate>
                    <ButtonTemplate click={() => setTheme("purple")}>
                        Teme Roxo
                    </ButtonTemplate>
                    <ButtonTemplate click={() => setTheme("blue")}>
                        Tema Azul
                    </ButtonTemplate>
                    <ButtonTemplate click={() => setTheme("orange")}>
                        Tema Laranja
                    </ButtonTemplate>
                    <ButtonTemplate click={() => setTheme("red")}>
                        Tema Vermelho
                    </ButtonTemplate>
                    <ContainerLink>
                        Voltar
                    </ContainerLink>
                </HeaderTemplateEditor>
                <>
                    <Form name='Crie sua pagina' submit={submit}>
                        <label>Nome da pagina</label>
                        <input 
                            name="name_page"
                            placeholder="Digite o nome da página*"
                        />
                        <label>Nome da pagina</label>
                        <input 
                            name="name_page"
                            placeholder="Digite o nome da página*"
                        />

                        <SubmitButton>Cadastrar Página</SubmitButton>
                    </Form>
                </>
            </Container>
        </>
    );
};
