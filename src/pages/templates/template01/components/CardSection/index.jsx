import { Container } from "./styles";

export const CardSection = ({title, children, m}) => {


    return (

        <>
            <Container m={m}>
                <div className="container_title">
                    <h3>{title}</h3>
                </div>
                
                    {children}
                
            </Container>
        </>

    );
}