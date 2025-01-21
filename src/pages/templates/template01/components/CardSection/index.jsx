import { Container, ContainerHeaderTitle } from "./styles";

export const CardSection = ({title, children, m}) => {


    return (

        <>
            <Container m={m}>
                <ContainerHeaderTitle>
                    <h3>{title}</h3>
                </ContainerHeaderTitle>
                <div>
                    {children}
                </div>
            </Container>
        </>

    );
}