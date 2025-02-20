import { FaUserCircle } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { TbArrowsExchange } from "react-icons/tb";
import { HeaderPageTemplate02 } from "../../../components/Header";
import { Container } from "../../home/styles";
import { ContainerContent } from "../styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../../../context/Auth";


export const HeaderAdmimTemplate02 = ({children}) => {
	const { login } = useContext(AuthContext);

	const headerUser = [
		{
			title: "Meus Pedidos",
			icon: <FaTruck />,
			active: true,
            link: 'meus-pedidos'
		},
		{
			title: "Trocas",
			icon: <TbArrowsExchange />,
			active: false,
            link: 'trocas'
		},
		{
			title: "Meus Dados",
			icon: <FaUserCircle />,
			active: false,
            link: 'meus-dados'
		},
		{
			title: "Endereço",
			icon: <MdLocationOn />,
			active: false,
            link: 'endereco'
		},
	];

	return (
		<>
			<HeaderPageTemplate02 />
			<Container>
				<ContainerContent>
					<div className="header-sidebar">
						<div className="avatar">
							<FaUserCircle className="icon-avatar" />
							<p>{login[0].user}</p>
						</div>
						<nav className="container-header">
							<ul className="header-list">
								{headerUser?.map((header) => (
									<Link to={header.link} className={header.active ? 'link-menu-active' : 'links-menu'}>
										<div className="icons-header">{header.icon}</div>
										<p>{header.title}</p>
									</Link>
								))}
							</ul>
						</nav>
					</div>
					{children}
				</ContainerContent>
			</Container>
		</>
	);
};
