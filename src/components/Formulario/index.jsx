
import { Container, Form } from "./styles"

export const Formulario = ({title, children, submit, w}) => {
    return (
        <>

            <Container>
                <Form onSubmit={submit} w={w}>
                    <h1>{title}</h1>
                    {children}
                </Form>
            </Container>

        </>
    )
}