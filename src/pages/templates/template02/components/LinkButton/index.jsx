import { Container } from "./styles"

export const LinkButton = ({link, w, children, color}) => {

    return (
        <Container to={link} w={w} color={color}>{children}</Container>
    )

}