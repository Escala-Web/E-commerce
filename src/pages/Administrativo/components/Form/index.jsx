
import { ControlForm, Container } from "./styles"

export const Form = ({children, name, submit}) => {

    return (
        <>
            <Container onSubmit={submit}>
                <h2>{name}</h2>
                <ControlForm>
                    {children}
                </ControlForm>
            </Container>
        </>
    )
}