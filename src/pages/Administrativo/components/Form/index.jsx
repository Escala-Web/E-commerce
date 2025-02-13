
import { ControlForm, Container } from "./styles"

export const Form = ({children, name, submit}) => {

    return (
        <>
            <Container encType="multipart/form-data" onSubmit={submit}>
                <ControlForm>
                    {children}
                </ControlForm>
            </Container>
        </>
    )
}