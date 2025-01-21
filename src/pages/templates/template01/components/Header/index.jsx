import {
	ContainerHeader,
	ContainerHeaderLogo,
	ContainerHeaderMenu,
	ContainerHeaderNavegacao,
	ContainerHeaderSearch,
	HeaderContainerLinkLogin,
	HeaderContainerLoginIcon,
	HeaderIconLogin,
	HeaderIconSearch,
	HeaderLink,
	HeaderLinkLogin,
	HeaderLogin,
	HeaderResultsSearch,
} from "./styles";
import logo from "../../../../../assets/logo_nsa.png";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { Formulario } from "../Formulario";
import { IoSearch } from "react-icons/io5";
import { useFecth } from "../../../../../hooks/useFecth";
import { useContext, useState } from "react";
import { useApi } from "../../../../../hooks/useApi";
import { AuthContext } from "../../../../../context/Auth";
export const HeaderPageTemplate01 = () => {
	const uri = "https://fakestoreapi.com/products";

	// const { headerLinks } = useContext(TemplateContext);

	const { data, erro, loading } = useFecth(uri);

	const { items, error } = useApi("/menu");

	const [openHeader, setOpenHeader] = useState(false);

	const [search, setSearch] = useState("");

	const { login } = useContext(AuthContext);

	const filter = data.filter((f) =>
		f.title.toLowerCase().includes(search.toLowerCase())
	);

	console.log(login)

	function clickOpenHeader() {
		setOpenHeader((prevOpen) => !prevOpen);
	}

	return (
		<>
			<ContainerHeader>
				<ContainerHeaderMenu>
					<ContainerHeaderLogo>
						<img src={logo} />
					</ContainerHeaderLogo>
					<ContainerHeaderNavegacao>
						<ul>
							{items.map((link) => (
								<li key={link.id}>
								<HeaderLink to={link.link}>{link.name}</HeaderLink>
							</li>
							))}
						</ul>
					</ContainerHeaderNavegacao>
					<div>
						<HeaderLogin>
							<HeaderContainerLoginIcon>
								<HeaderIconLogin>
									<FaUserAlt color="#323232" />
								</HeaderIconLogin>
								{login ? (
								<HeaderContainerLinkLogin>
									<HeaderLinkLogin to='/administrativo'>Administrador</HeaderLinkLogin>
								</HeaderContainerLinkLogin>
								) : (
								<HeaderContainerLinkLogin>
									<HeaderLinkLogin to='/login'>Login/</HeaderLinkLogin>
									<HeaderLinkLogin to='/login'>Registra</HeaderLinkLogin>
								</HeaderContainerLinkLogin>
								)}
							</HeaderContainerLoginIcon>
							<HeaderIconLogin>
								<FaCartShopping color="#323232" />
								<p>2</p>
							</HeaderIconLogin>
						</HeaderLogin>
					</div>
				</ContainerHeaderMenu>
				<ContainerHeaderSearch>
					<Formulario>
						<input 
							placeholder="Pesquisar"
							value={search}
							onChange={(event) => setSearch(event.target.value)}
							 />
						<HeaderIconSearch>
							<IoSearch color="#323232" />
						</HeaderIconSearch>

						{search !== '' && (
							<HeaderResultsSearch>
						{filter.map((f) => (
									<p>{f.title}</p>
								))}
						</HeaderResultsSearch>
						)}
					</Formulario>
				</ContainerHeaderSearch>
			</ContainerHeader>
		</>
	);
};
