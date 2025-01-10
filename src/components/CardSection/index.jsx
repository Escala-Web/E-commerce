import { Container } from "./styles"

export const CardSection = ({ children, w }) => {

    return (
        <Container w={w}>
            {children}
        </Container>
    )

}