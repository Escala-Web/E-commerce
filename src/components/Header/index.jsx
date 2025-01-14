import { Link, useParams } from "react-router-dom";
import { theme } from "../../theme/theme";
import {
	HeaderContainer,
	ContainerLogo,
	ContainerNavegacao,
	ContainerLinksUl,
	LinkStyle,
	LILInk,
	LogoutAdm,
} from "./styles";
import { FaHome, FaPager, FaStore, FaUser } from "react-icons/fa";
import { RiLogoutCircleRFill, RiShoppingCart2Fill } from "react-icons/ri";
import { LuMousePointerClick } from "react-icons/lu";
import { BiSolidLabel } from "react-icons/bi";
import { useContext, useState } from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";
import { HeaderConsume } from "../../context/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdInsertPageBreak } from "react-icons/md";
import { TemplateContext } from "../../context/Template";

export const Header = () => {
	const [activeLink, setActiveLink] = useState("painel");
	const { session, setSession } = useContext(HeaderConsume);

	const {template} = useContext(TemplateContext);

	function onClickActiveLink(e) {
		const active = e.target.title;
		setActiveLink(active);
	}

	console.log(template)

	return (
		<>
			<HeaderContainer>
				<ContainerLogo>
					<img  src="https://escalaweb.com.br/images/logo-nova.png" />
				</ContainerLogo>
				<ContainerNavegacao>
					<ContainerLinksUl onClick={onClickActiveLink}>
						{!session ? (
							<>
								<LILInk
									to="/administrativo"
									className={activeLink == "painel" ? "active" : ""}
									title="painel"
								>
									<FaHome color={theme.colors.gray[800]} />
									<LinkStyle to="/administrativo" title="painel">
										Painel
									</LinkStyle>
								</LILInk>

								<LILInk
									to="/administrativo/pedidos"
									className={activeLink == "pedidos" ? "active" : ""}
									title="pedidos"
								>
									<RiShoppingCart2Fill color={theme.colors.gray[800]} />

									<LinkStyle to="/administrativo/pedidos" title="pedidos">
										Pedidos
									</LinkStyle>
								</LILInk>

								<LILInk
									to="/administrativo/produtos"
									className={activeLink == "produtos" ? "active" : ""}
									title="produtos"
								>
									<BiSolidLabel color={theme.colors.gray[800]} />

									<LinkStyle to="/administrativo/produtos" title="produtos">
										Produtos
									</LinkStyle>
								</LILInk>

								<LILInk
									to="/administrativo/clientes"
									className={activeLink == "clientes" ? "active" : ""}
									title="clientes"
								>
									<FaUser color={theme.colors.gray[800]} />

									<LinkStyle to="/administrativo/clientes" title="clientes">
										Clientes
									</LinkStyle>
								</LILInk>

								<LILInk
									to="/administrativo/loja"
									className={activeLink == "loja" ? "active" : ""}
									title="loja"
								>
									<FaStore color={theme.colors.gray[800]} />

									<LinkStyle to="/administrativo/loja" title="loja">
										Loja
									</LinkStyle>
								</LILInk>

								<LILInk
									to="/administrativo/pagamentos"
									className={activeLink == "pagamentos" ? "active" : ""}
									title="pagamentos"
								>
									<FaMoneyBillTransfer color={theme.colors.gray[800]} />

									<LinkStyle to="/administrativo/pagamentos" title="pagamentos">
										Pagamentos
									</LinkStyle>
								</LILInk>

								<LILInk
									to="/administrativo/marketing"
									className={activeLink == "marketing" ? "active" : ""}
									title="marketing"
								>
									<LuMousePointerClick color={theme.colors.gray[800]} />

									<LinkStyle to="/administrativo/marketing" title="marketing">
										Seo
									</LinkStyle>
								</LILInk>
							</>
						) : (
							<>
								<LILInk
									to="/administrativo/loja"
									className={activeLink == "loja" ? "active" : ""}
									title="loja"
									onClick={() => setSession(false)}
								>
									<IoMdArrowRoundBack color={theme.colors.gray[800]} />
									<LinkStyle to="/administrativo/loja" title="loja">
										Voltar
									</LinkStyle>
								</LILInk>

								<p style={{
									color: '#374151',
									fontWeight: '600',
									paddingBottom: '1rem',
									paddingLeft: '20px',
								}}>Criar página</p>
								

								<LILInk
									to={`/administrativo/${template}/cabecario`}
									className={activeLink == "cabecario" ? "active" : ""}
									title="cabecario"
								>
									<FaPager color={theme.colors.gray[800]} />

									<LinkStyle to={`/administrativo/${template}/cabecario`} title="cabecario">
										Cabeçario
									</LinkStyle>
								</LILInk>

								<LILInk
									to={`/administrativo/${template}/conteudo`}
									className={activeLink == "conteudo" ? "active" : ""}
									title="conteudo"
								>
									<MdInsertPageBreak color={theme.colors.gray[800]} />

									<LinkStyle to={`/administrativo/${template}/conteudo`} title="conteudo">
										Conteudo
									</LinkStyle>
								</LILInk>
							</>
						)}

						<LogoutAdm>
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
