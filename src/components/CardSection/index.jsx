import { Container } from "./styles"

export const CardSection = ({ children, w, h, scroll }) => {

    return (
        <Container w={w} h={h} scroll={scroll}>
            {children}
        </Container>
    )

}