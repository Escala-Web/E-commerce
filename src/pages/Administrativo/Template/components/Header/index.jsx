import { ButtonTemplate } from "../Button"
import { Container, ContainerButton, ContainerMenu } from "./styles"

export const HeaderTemplateEditor = () => {

    return (
        <>
            <Container>
                <ContainerMenu>
                    <ContainerButton>
                        <ButtonTemplate active={true}>Thema 1</ButtonTemplate>
                        <ButtonTemplate>Thema 2</ButtonTemplate>
                        <ButtonTemplate>Thema 3</ButtonTemplate>
                        <ButtonTemplate>Thema 4</ButtonTemplate>
                        <ButtonTemplate>Thema 5</ButtonTemplate>
                    </ContainerButton>
                </ContainerMenu>
            </Container>
        </>
    )
}