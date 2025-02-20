import { useContext, useEffect, useState } from "react";
import logo from "../../../../../assets/logo_nsa.png";
import { ContainerDesktop } from "./styles";
import { IoIosArrowDown } from "react-icons/io";

import { AuthContext } from "../../../../../context/Auth";
import { useLogin } from "../../../../../hooks/useLogin";
import { FiUsers } from "react-icons/fi";
import { HiOutlineShoppingCart, HiSearch } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const HeaderPageTemplate02 = () => {
	const { auth, login } = useContext(AuthContext);

	const [isOpenDrag, setIsOpenDrag] = useState(false);

	const { logout } = useLogin();

	console.log(isOpenDrag)

	return (
		<>
			<ContainerDesktop>
				<div className="header-top header-pd ">
					<div className="logo-imagem">
						<img src={logo} title="Logo" />
					</div>
					<div className="header-container-search">
						<input placeholder="O que você esta procurando?" />
						<HiSearch className="icon-search" />
					</div>
					<div className="header-container-left">
						<div className="header-container-options-left">
							<FaRegHeart className="header-icons-options" />
							<p>Favoritos</p>
						</div>
						<div 
						onMouseEnter={() => setIsOpenDrag(false)}
						onMouseOver={() => setIsOpenDrag(true)}
						className="header-container-options-left">
							<FiUsers className="header-icons-options" />
							<p>Entrar</p>
							<IoIosArrowDown />
						</div>

						{isOpenDrag ? (
							<div id="header-login-active">
								<ul>
									<li>
										<Link>Login</Link>
									</li>
									<li>
										<Link>Registrar</Link>
									</li>
								</ul>
							</div>
						): ""}

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
							<li>Página Inicial</li>
							<li>Produtos</li>
							<li>Todos as Categorias</li>
							<li>Contato</li>
						</ul>
					</nav>
				</div>

				<div className="header-content-descont">
					<p>Produtos com 70% de desconto</p>
				</div>
			</ContainerDesktop>
		</>
	);
};
