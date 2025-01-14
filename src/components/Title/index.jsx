import { Container } from "./styles";

export const Title = ({ children, fontSize }) => {
	return <Container fontSize={fontSize}>{children}</Container>;
};
