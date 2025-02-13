import { Container } from "./styles";

export const Content = ({ title, children, w }) => {

    return (

        <>
            <Container w={w}>
                <div className="header">
                    <h3>{title}</h3>
                </div>
                <div className="content">
                    {children}
                </div>
            </Container>
        </>

    );
}