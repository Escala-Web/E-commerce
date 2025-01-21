import { Container } from "./styles"

export const ButtonTemplate = ({children, active}) => {

    return (
        <Container className={active ? 'active' : ''}>{children}</Container>
    )
}