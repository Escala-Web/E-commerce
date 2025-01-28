import { Container, LinkCategory } from "./styles"

export const Category = ({title, link, name}) => {

    return (
        <>
            <Container>
                <h2>{title}</h2>
                <LinkCategory to={link}>{name}</LinkCategory>
            </Container>
        </>
    )

}