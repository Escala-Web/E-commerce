import { Container, LinkContainer } from "./styles"

export const ButtonTemplate = ({children, active, click, name}) => {

    return (
        <div>
            <Container className={active ? 'active' : ''} onClick={click}>{children}</Container>
    

        </div>
    )
}