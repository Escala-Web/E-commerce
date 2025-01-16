import { useContext, useState } from "react";
import { TemplateContext } from "../../../../../context/Template";
import logo from "../../../../../assets/logo.png";
import {
	ContainerDesktop,
	ContainerHeader,
	ContainerHeaderMobile,
	ContainerHeaderOpenMbStyle,
	ContainerMobile,
	ContainerSearch,
	ContainerSearchResults,
	ContainerSearchStyle,
	HeaderSearchMobile,
	LinkNavigation,
	LinkNavigationLogin,
	Navegacao,
	SearchIcon,
} from "./styles";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { Input } from "../Input/input";
import { IoSearch } from "react-icons/io5";
import { useFecth } from "../../../../../hooks/useFecth";
import { CgClose } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { useApi } from "../../../../../hooks/useApi";

export const HeaderPage = () => {
	const uri = "https://fakestoreapi.com/products";

	const { headerLinks } = useContext(TemplateContext);

	const { data, erro, loading } = useFecth(uri);

	const {items, error} = useApi('/menu');

	const [openHeader, setOpenHeader] = useState(false);

	const [search, setSearch] = useState("");

	const filter = data.filter((f) =>
		f.title.toLowerCase().includes(search.toLowerCase())
	);

	function clickOpenHeader() {
		setOpenHeader((prevOpen) => !prevOpen);
	}

	return (
		<>
			<ContainerDesktop>
				<ContainerHeader>
					<div>
						<img src={logo} />
					</div>
					<ContainerSearchStyle w="50%">
						<SearchIcon>
							<IoSearch />
						</SearchIcon>
						<Input
							placeholder="Pesquisar"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						{search == "" ? (
							""
						) : (
							<ContainerSearchResults>
								{filter.map((f) => (
									<p>{f.title}</p>
								))}
							</ContainerSearchResults>
						)}
					</ContainerSearchStyle>
					<Navegacao>
						<ul>
							<li>
								<LinkNavigationLogin bg="transparent" to="/carrinho">
									<FaCartShopping color="#fff" size={22} />
								</LinkNavigationLogin>
							</li>
							<li>
								<LinkNavigationLogin to="/login">
									<FaUserAlt />
									Entrar
								</LinkNavigationLogin>
							</li>
						</ul>
					</Navegacao>
				</ContainerHeader>
				<ContainerSearch>
					<p>Informe seu cep</p>

					<Navegacao>
						<ul>
							{items.map((header) => (
								<li>
									<LinkNavigation>{header.name}</LinkNavigation>
								</li>
							))}
						</ul>
					</Navegacao>
				</ContainerSearch>
			</ContainerDesktop>
			<ContainerMobile>
				<ContainerHeaderMobile>
					<LinkNavigationLogin bg="transparent" to="/carrinho">
						<FaCartShopping color="#fff" size={22} />
					</LinkNavigationLogin>
					<div>
						<img src={logo} />
					</div>
					<div onClick={clickOpenHeader}>
						{!openHeader ? (
							<FaBars size={30} color="#fff" />
						) : (
							<CgClose size={30} color="#fff" />
						)}
					</div>

					{openHeader && (
						<ContainerHeaderOpenMbStyle>
							<Navegacao>
								<div>
									<LinkNavigationLogin to="/login">
										<FaUserAlt />
										Entrar
									</LinkNavigationLogin>
								</div>
								<ul>
									{headerLinks.map((header) => (
										<li>
											<LinkNavigation>{header}</LinkNavigation>
										</li>
									))}
								</ul>
							</Navegacao>
						</ContainerHeaderOpenMbStyle>
					)}
				</ContainerHeaderMobile>
				<HeaderSearchMobile>
					<ContainerSearchStyle w="100%">
						<SearchIcon>
							<IoSearch />
						</SearchIcon>
						<Input
							placeholder="Pesquisar"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						{search == "" ? (
							""
						) : (
							<ContainerSearchResults>
								{filter.map((f) => (
									<p>{f.title}</p>
								))}
							</ContainerSearchResults>
						)}
					</ContainerSearchStyle>
				</HeaderSearchMobile>
			</ContainerMobile>
		</>
	);
};
