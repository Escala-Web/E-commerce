import { useContext, useEffect, useState } from "react";
import { TemplateContext } from "../../../../../context/Template";
import logo from "../../../../../assets/logo_nsa.png";
import { useFecth } from "../../../../../hooks/useFecth";
import { useApi } from "../../../../../hooks/useApi";
import {
	ContainerDesktop,
	ContainerImage,
	ContainerLoginToCart,
	ContainerNavegation,
	ContainerIcons,
	LinkMenu,
	ContainerMobile,
	ContainerMenuMobile,
	ContainerMenuMobileLogin,
	ContainerNumberFavorite,
	ContainerDrowMenu,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { SlHandbag } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";

import { LinkButton } from "../LinkButton";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FavoriteContext } from "../../../../../context/Favorite";
import { https } from "../../../../../config/https";

export const HeaderPageTemplate02 = () => {
	const uri = "https://fakestoreapi.com/products";
	const { data } = useFecth(uri);
	const { items } = useApi("/pages");
	const { favorite } = useContext(FavoriteContext);
	const [openHeader, setOpenHeader] = useState(false);
	const [search, setSearch] = useState("");
	const [menuCategory, setMenuCategory] = useState([]);
	const [isOpenMenuCategory, setIsOpenMenuCategory] = useState(false);

	const filter = data.filter((f) =>
		f.title.toLowerCase().includes(search.toLowerCase())
	);

	const navigate = useNavigate();

	function clickOpenHeader() {
		setOpenHeader((prevOpen) => !prevOpen);
	}

	const favorid = favorite.length > 0 ? favorite.length : 0;

	const currentPath = window.location.pathname;

	async function findAllCategorys() {
		try {
			const { data } = await https.get("/categories/get-parents");
			setMenuCategory(data.content);
		} catch (error) {}
	}

	useEffect(() => {
		findAllCategorys();
	}, []);

	return (
		<>
			<ContainerDesktop>
				<ContainerImage to="/">
					<img src={logo} />
				</ContainerImage>
				<ContainerNavegation>
					<ul >
						<li>
							<LinkMenu onMouseEnter={() => setIsOpenMenuCategory(false)} to='/'>Página Inicial</LinkMenu>
						</li>
						<li>
							<LinkMenu onMouseEnter={() => setIsOpenMenuCategory(false)}>Produtos</LinkMenu>
						</li>
						<li>
							<LinkMenu
								onMouseEnter={() => setIsOpenMenuCategory(true)}
							>
								Categorias
							</LinkMenu>
						</li>
						<li>
							<LinkMenu onMouseEnter={() => setIsOpenMenuCategory(false)}>Contato</LinkMenu>
						</li>
						{isOpenMenuCategory && (
							<ContainerDrowMenu onMouseEnter={() => setIsOpenMenuCategory(true)}>
								{(menuCategory || []).map((cat) => (
									<LinkMenu
										key={cat.id_category}
										to={`/${cat.name
											.toLowerCase()
											.replace(/\s+/g, "-")}?category=${cat.id_category}`}
									>
										{cat.name}
									</LinkMenu>
								))}
							</ContainerDrowMenu>
						)}
					</ul>
				</ContainerNavegation>
				<ContainerLoginToCart>
					<ContainerIcons>
						<IoIosSearch size={20} style={{ zIndex: "999" }} />
					</ContainerIcons>
					<ContainerIcons onClick={() => navigate('/carrinho')}>
						<SlHandbag size={20} style={{ zIndex: "999" }} />
						<ContainerNumberFavorite>
							<span>{favorid}</span>
						</ContainerNumberFavorite>
					</ContainerIcons>
					<LinkButton link="/login">Login</LinkButton>
				</ContainerLoginToCart>
			</ContainerDesktop>

			<ContainerMobile>
				<ContainerImage>
					<img src={logo} />
				</ContainerImage>

				<ContainerLoginToCart>
					<ContainerIcons>
						<SlHandbag size={30} style={{ zIndex: "999" }} />
					</ContainerIcons>
					<ContainerIcons onClick={clickOpenHeader}>
						{openHeader ? (
							<FaBarsStaggered size={30} style={{ zIndex: "999" }} />
						) : (
							<IoCloseSharp size={30} style={{ zIndex: "999" }} />
						)}
					</ContainerIcons>
				</ContainerLoginToCart>

				{!openHeader && (
					<ContainerMenuMobile>
						<ContainerNavegation>
							<ul>
								{items.map((item) => (
									<li key={item.id}>
										<LinkMenu
											to={item.link}
											isActive={currentPath === item.link}
										>
											{item.page}
										</LinkMenu>
									</li>
								))}
							</ul>
						</ContainerNavegation>
						<ContainerMenuMobileLogin>
							<LinkButton link="/login">Entrar</LinkButton>
							<LinkButton link="/login">Criar Conta</LinkButton>
						</ContainerMenuMobileLogin>
					</ContainerMenuMobile>
				)}
			</ContainerMobile>
		</>
	);
};
