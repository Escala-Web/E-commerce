import { Link } from "react-router-dom";
import { theme } from "../../theme/theme";
import {
	HeaderContainer,
	ContainerLogo,
	ContainerNavegacao,
	ContainerLinksUl,
	LinkStyle,
	LILInk
} from "./styles";
import { FaHome, FaStore, FaUser } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { LuMousePointerClick } from "react-icons/lu";
import { BiSolidLabel } from "react-icons/bi";
import { useState } from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export const Header = () => {

	const [activeLink, setActiveLink] = useState('painel')

	function onClickActiveLink(e) {

		const active = e.target.title
		setActiveLink(active);
	}

	console.log(activeLink)

	return (
		<>
			<HeaderContainer>
				<ContainerLogo>
					<img src="https://escalaweb.com.br/images/logo-nova.png" />
				</ContainerLogo>
				<ContainerNavegacao>
					<ContainerLinksUl onClick={onClickActiveLink}>
						
						<LILInk to='/' className={activeLink == 'painel' ? 'active' : ''} title="painel">
							<FaHome color={theme.colors.gray[800]} />
							<LinkStyle to="/" title="painel">Painel</LinkStyle>
						</LILInk>

						<LILInk to='/pedidos' className={activeLink == 'pedidos' ? 'active' : ''} title='pedidos'>
							<RiShoppingCart2Fill color={theme.colors.gray[800]} />

							<LinkStyle to="/pedidos" title='pedidos'>Pedidos</LinkStyle>
						</LILInk>

						<LILInk to='/produtos' className={activeLink == 'produtos' ? 'active' : ''} title="produtos" >
							<BiSolidLabel color={theme.colors.gray[800]} />

							<LinkStyle to='/produtos' title="produtos">Produtos</LinkStyle>
						</LILInk>

						<LILInk to='/clientes' className={activeLink == 'clientes' ? 'active' : ''} title="clientes">
							<FaUser color={theme.colors.gray[800]} />

							<LinkStyle to='/clientes' title="clientes">Clientes</LinkStyle>
						</LILInk>

						<LILInk to='/loja' className={activeLink == 'loja' ? 'active' : ''} title="loja">
							<FaStore color={theme.colors.gray[800]} />

							<LinkStyle to='/loja' title="loja">Loja</LinkStyle>
						</LILInk>

						<LILInk to='/pagamentos' className={activeLink == 'pagamentos' ? 'active' : ''} title="pagamentos">
							<FaMoneyBillTransfer color={theme.colors.gray[800]} />

							<LinkStyle to='/pagamentos' title="pagamentos">Pagamentos</LinkStyle>
						</LILInk>

						<LILInk to='/marketing' className={activeLink == 'marketing' ? 'active' : ''} title="marketing">
							<LuMousePointerClick color={theme.colors.gray[800]} />

							<LinkStyle to='/marketing' title="marketing">Seo</LinkStyle>
						</LILInk>

						

				

					</ContainerLinksUl>
				</ContainerNavegacao>
			</HeaderContainer>
		</>
	);
};
