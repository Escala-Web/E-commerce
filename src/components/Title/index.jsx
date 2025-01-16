import { Container } from "./styles";

export const Title = ({ children, fontSize, textAlign }) => {
	return <Container fontSize={fontSize} textAlign={textAlign}>{children}</Container>;
};
