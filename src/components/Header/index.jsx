import { useNavigate, useSearchParams } from "react-router-dom";
import {
	HeaderContainer,
	ContainerLogo,
	ContainerNavegacao,
	ContainerLinksUl,
	LinkStyle,
	LILInk,
	LogoutAdm,
} from "./styles";
import { FaHome, FaStore, FaUser } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { LuMousePointerClick } from "react-icons/lu";
import { BiSolidLabel } from "react-icons/bi";
import { useContext, useState } from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/Auth";

export const Header = () => {
	const [activeLink, setActiveLink] = useState("painel");

	const navigate = useNavigate()

	const { setLogin } = useContext(AuthContext);

	function onClickActiveLink(e) {
		const active = e.target.title;
		setActiveLink(active);
	}

	function toggleLogout() {
		localStorage.removeItem("userLogin");
        toast.success('Até a próxima');
		setLogin(null)
		navigate('/');
	}

	return (
		<>
			<HeaderContainer>
				<ContainerLogo>
					<img  src="https://escalaweb.com.br/images/logo-nova.png" />
				</ContainerLogo>
				<ContainerNavegacao>
					<ContainerLinksUl onClick={onClickActiveLink}>
						
								<LILInk
									to="/administrativo"
									className={activeLink == "painel" ? "active" : ""}
									title="painel"
								>
									<FaHome  />
									<LinkStyle to="/administrativo" title="painel">
										Painel
									</LinkStyle>
								</LILInk>

								<LILInk
									to="/administrativo/pedidos"
									className={activeLink == "pedidos" ? "active" : ""}
									title="pedidos"
								>
									<RiShoppingCart2Fill  />

									<LinkStyle to="/administrativo/pedidos" title="pedidos">
										Pedidos
									</LinkStyle>
								</LILInk>

								<LILInk
									to="/administrativo/produtos"
									className={activeLink == "produtos" ? "active" : ""}
									title="produtos"
								>
									<BiSolidLabel  />

									<LinkStyle to="/administrativo/produtos" title="produtos">
										Produtos
									</LinkStyle>
								</LILInk>

								<LILInk
									to="/administrativo/clientes"
									className={activeLink == "clientes" ? "active" : ""}
									title="clientes"
								>
									<FaUser  />

									<LinkStyle to="/administrativo/clientes" title="clientes">
										Clientes
									</LinkStyle>
								</LILInk>

								<LILInk
									to="/administrativo/loja"
									className={activeLink == "loja" ? "active" : ""}
									title="loja"
								>
									<FaStore  />

									<LinkStyle to="/administrativo/loja" title="loja">
										Loja
									</LinkStyle>
								</LILInk>

								<LILInk
									to="/administrativo/pagamentos"
									className={activeLink == "pagamentos" ? "active" : ""}
									title="pagamentos"
								>
									<FaMoneyBillTransfer  />

									<LinkStyle to="/administrativo/pagamentos" title="pagamentos">
										Pagamentos
									</LinkStyle>
								</LILInk>

								<LILInk
									to="/administrativo/marketing"
									className={activeLink == "marketing" ? "active" : ""}
									title="marketing"
								>
									<LuMousePointerClick  />

									<LinkStyle to="/administrativo/marketing" title="marketing">
										Seo
									</LinkStyle>
								</LILInk>
						

						<LogoutAdm onClick={toggleLogout}>
						
							<LILInk
								to="/"
								title="Sair"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									background: "rgb(237 50 55)",
								}}
							>
								<LinkStyle to="/" style={{ color: "#fff" }} title="Sair">
									Sair
								</LinkStyle>
							</LILInk>
						</LogoutAdm>
					</ContainerLinksUl>
				</ContainerNavegacao>
			</HeaderContainer>
		</>
	);
};
