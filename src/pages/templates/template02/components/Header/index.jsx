import { useContext, useEffect, useState } from "react";
import logo from "../../../../../assets/logo_nsa.png";
import { ContainerDesktop, ContainerMobile } from "./styles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { AuthContext } from "../../../../../context/Auth";
import { FiUsers } from "react-icons/fi";
import { HiOutlineShoppingCart, HiSearch } from "react-icons/hi";
import { FaBars, FaHeart, FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { FavoriteContext } from "../../../../../context/Favorite";
import { Favorit } from "../Favorid";
import { MdShoppingCart } from "react-icons/md";
import { MobileHeader } from "./Mobile";

export const HeaderPageTemplate02 = () => {
	const { auth, login } = useContext(AuthContext);

	const [isOpenDrag, setIsOpenDrag] = useState(false);

	const [search, setSearch] = useState("");

	const [openDrawer, setOpenDrawer] = useState(false);
	const [openHeaderMobile, setOpenHeaderMobile] = useState(false);

	const toggleDrawer = (open) => {
		setOpenDrawer(open);
	};

	const toggleHeaderMobile = (open) => {
		setOpenHeaderMobile(open);
	};

	return (
		<>
			{/* Header Desktop */}
			<ContainerDesktop>
				<div
					className="header-top header-pd "
					onMouseLeave={() => setIsOpenDrag(false)}
				>
					<div className="logo-imagem">
						<img src={logo} title="Logo" />
					</div>
					<div className="header-container-search">
						<input
							placeholder="O que você esta procurando?"
							value={search}
							onChange={(event) => setSearch(event.target.value)}
						/>
						<HiSearch className="icon-search" />

						{search !== "" && (
							<ul className="search-results">
								<Link className="search-result-link">Teste</Link>
							</ul>
						)}
					</div>
					<div className="header-container-left">
						<div
							onClick={() => toggleDrawer(true)}
							className="header-container-options-left"
						>
							<FaRegHeart className="header-icons-options" />
							<p>Favoritos</p>
						</div>
						<div
							onMouseEnter={() => setIsOpenDrag(true)}
							className="header-container-options-left"
						>
							<FiUsers className="header-icons-options" />
							<p>Entrar</p>
							{isOpenDrag ? <IoIosArrowUp /> : <IoIosArrowDown />}
						</div>

						{isOpenDrag ? (
							<div id="header-login-active">
								<ul className="header-submenu">
									<li>
										<Link className="link_submenu" to="/login">
											Login
										</Link>
									</li>
									<li>
										<Link className="link_submenu" to="/registrar">
											Registrar
										</Link>
									</li>
									<hr />
									<li>
										<Link className="link_submenu" to="/administrativo/login">
											Login adm
										</Link>
									</li>
								</ul>
							</div>
						) : (
							""
						)}

						<div className="header-container-options-left header-option-cart">
							<HiOutlineShoppingCart className="header-icons-options" />
							<span className="header-option-qtd-cart">23</span>
						</div>
					</div>
				</div>

				<div className="header-content-menu header-pd ">
					<div className="header-menu-location">
						<IoLocationOutline />
						<p>Informe seu CEP</p>
					</div>
					<nav className="header-navigation-menu">
						<ul>
							<li><Link to='/' className="header-navigation-link">Página Inicial</Link></li>
							<li><Link to='/produtos' className="header-navigation-link">Produtos</Link></li>
							<li><Link className="header-navigation-link">Todos as Categorias</Link></li>
							<li><Link to='/contato' className="header-navigation-link">Contato</Link></li>
						</ul>
					</nav>
				</div>

				<div className="header-content-descont">
					<p>Produtos com 70% de desconto</p>
				</div>
			</ContainerDesktop>
			<Drawer
				style={{ zIndex: "99999" }}
				anchor="right" // Definindo a gaveta para abrir pela esquerda
				open={openDrawer} // Usando o estado para controlar a visibilidade
				onClose={() => toggleDrawer(false)} // Fechar o Drawer ao clicar fora
			>
				<List>
					<ListItem button>
						<ListItemText primary={<Favorit title="Favoritos" />} />
					</ListItem>
				</List>
			</Drawer>

			{/* Header Mobile */}
			<ContainerMobile>
				<div className="container-header-mobile">
					<div className="header-menu-mobile">
						<FaBars onClick={toggleHeaderMobile} />
					</div>
					<div className="header-logo-mobile">
						<img src={logo} alt="Logo do site" title="Logo do site" />
					</div>
					<div className="header-cart-mobile">
						<FaHeart onClick={toggleDrawer} />
						<MdShoppingCart />
					</div>
				</div>
				<div className="header-container-search">
					<input
						placeholder="O que você esta procurando?"
						value={search}
						onChange={(event) => setSearch(event.target.value)}
					/>
					<HiSearch className="icon-search" />

					{search !== "" && (
						<ul className="search-results">
							<Link className="search-result-link">Teste</Link>
						</ul>
					)}
				</div>
			</ContainerMobile>

			<Drawer
				style={{ zIndex: "99999" }}
				anchor="left" // Definindo a gaveta para abrir pela esquerda
				open={openHeaderMobile} // Usando o estado para controlar a visibilidade
				onClose={() => toggleHeaderMobile(false)} // Fechar o Drawer ao clicar fora
			>
				<List>
					<ListItem button>
						<ListItemText primary={<MobileHeader />} />
					</ListItem>
				</List>
			</Drawer>
		</>
	);
};
