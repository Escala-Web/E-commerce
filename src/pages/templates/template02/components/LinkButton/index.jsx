import { Container } from "./styles"

export const LinkButton = ({link, w, children}) => {

    return (
        <Container to={link} w={w}>{children}</Container>
    )

}