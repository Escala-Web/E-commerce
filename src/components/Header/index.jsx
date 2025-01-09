import { Link } from "react-router-dom";
import { theme } from "../../theme/theme";
import {
	HeaderContainer,
	ContainerLogo,
	ContainerNavegacao,
	ContainerLinksUl,
	LinkStyle,
} from "./styles";
import { FaHome } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";

export const Header = () => {
	return (
		<>
			<HeaderContainer>
				<ContainerLogo>
					<img src="https://escalaweb.com.br/images/logo-nova.png" />
				</ContainerLogo>
				<ContainerNavegacao>
					<ContainerLinksUl>
						<li>
							<FaHome color={theme.colors.gray[800]} />
							<LinkStyle to="/">Home</LinkStyle>
						</li>
						<li>
							<RiShoppingCart2Fill color={theme.colors.gray[800]} />

							<LinkStyle to="/pedidos">Pedido</LinkStyle>
						</li>
					</ContainerLinksUl>
				</ContainerNavegacao>
			</HeaderContainer>
		</>
	);
};
