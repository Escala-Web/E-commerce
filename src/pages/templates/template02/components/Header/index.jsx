import { useContext, useState } from "react";
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
} from "./styles";
import { Link } from "react-router-dom";
import { SlHandbag } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";

import { LinkButton } from "../LinkButton";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FavoriteContext } from "../../../../../context/Favorite";

export const HeaderPageTemplate02 = () => {
	const uri = "https://fakestoreapi.com/products";

	const { data} = useFecth(uri);

	const { items } = useApi("/pages");

	const {favorite} = useContext(FavoriteContext);

	const [openHeader, setOpenHeader] = useState(false);

	const [search, setSearch] = useState("");

	const filter = data.filter((f) =>
		f.title.toLowerCase().includes(search.toLowerCase())
	);

	function clickOpenHeader() {
		setOpenHeader((prevOpen) => !prevOpen);
	}

	const favorid = favorite.length > 0 ? favorite.length : 0;

	console.log(favorid)


	const currentPath = window.location.pathname;

	return (
		<>
			<ContainerDesktop>
				<ContainerImage>
					<img src={logo} />
				</ContainerImage>
				<ContainerNavegation>
					<ul>
						{items.map((item) => (
							<li key={item.id}>
								<LinkMenu to={item.link} isActive={currentPath === item.link}>
									{item.page}
								</LinkMenu>
							</li>
						))}
					</ul>
				</ContainerNavegation>
				<ContainerLoginToCart>
					<ContainerIcons>
						<IoIosSearch size={20} style={{ zIndex: "999" }} />
					</ContainerIcons>
					<ContainerIcons>
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
						{openHeader ? <FaBarsStaggered size={30} style={{ zIndex: "999" }} /> : <IoCloseSharp size={30} style={{ zIndex: "999" }}/>}
					</ContainerIcons>
				</ContainerLoginToCart>

				{!openHeader && (
					<ContainerMenuMobile>
					<ContainerNavegation>
						<ul>
							{items.map((item) => (
								<li key={item.id}>
									<LinkMenu to={item.link} isActive={currentPath === item.link}>
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
