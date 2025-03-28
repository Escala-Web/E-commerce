import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../../context/Auth";
import { ContainerHeader, ContainerNavibar } from "./styles";
import { Search } from "../Search";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../../../../../assets/logo/logo-nova.png";
import { FaBarsStaggered } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@mui/material";
import { navigationSite, navigationSiteAdm } from "../../../../../utils/Navigation/HeaderNavigation";
import { Logo } from "../Logo";

export const HeaderPageTemplate01 = React.memo(() => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	return (
		<>
			<ContainerHeader>
				<div className="container_header_main">
					<Logo image={logo} />
					<Search />
					<div className="container_header_actions">
						<div className="container_header_login">
							<div className="header_login_icon">
								<FaUserAlt />
							</div>
							{login === null ? (
								<p>
									<Link to="/login">Entre</Link> ou <br />
									<Link to="/">Cadastre-se</Link>
								</p>
							) : (
								<p onClick={() => navigate("/custumer")}>
									Olá, {login[0].user.split(" ")[0]}
								</p>
							)}
						</div>
						<div className="container_favorid_and_cart">
							<div className="favorit">
								<FiHeart className="icons" />
							</div>
							<div className="cart">
								<MdOutlineShoppingCart className="icons" />
							</div>
						</div>
					</div>
				</div>

				<div className="container_header_main_mobile">
					<div className="header_mobile_top">
						<FaBarsStaggered onClick={toggleDrawer(true)} />
						<Logo image={logo} />
						<div className="container_favorid_and_cart">
							<div className="favorit">
								<FiHeart className="icons" />
							</div>
							<div className="cart">
								<MdOutlineShoppingCart className="icons" />
							</div>
						</div>
					</div>
					<div className="search_mobile">
						<Search />
					</div>
				</div>

				<div className="container_header_navigation">
					<nav className="container_navigation">
						<ul>
							<li>
								<Link to="/">Página Inicial</Link>
							</li>
							<li>
								<Link>Categorias</Link>
							</li>
							<li>
								<Link>Marcas</Link>
							</li>

							<li>
								<Link to="/produtos">Lançamentos</Link>
							</li>
							<li>
								<Link>Suporte</Link>
							</li>
						</ul>
					</nav>
				</div>
			</ContainerHeader>

			<Drawer open={open} onClose={toggleDrawer(false)}>
				<Box
					sx={{ width: 350 }}
					role="presentation"
					onClick={toggleDrawer(false)}
				>
					<ContainerNavibar>
						<div>
							<div className="container_nav">
								{login !== null ? (
									<>
										<Avatar>{login[0].user.split("")[0]}</Avatar>
										<p>Olá, {login[0].user.split(" ")[0]}</p>
									</>
								) : (
									<>
										<Avatar>E</Avatar>
										<p>Olá, Entrar na conta</p>
									</>
								)}
							</div>
							<Divider />
							<List>
								{navigationSite.map((text, index) => (
									<ListItem key={index} disablePadding>
										<ListItemButton component={Link} to={text.link}>
											<ListItemIcon>{text.icon}</ListItemIcon>
											<ListItemText primary={text.name} />
										</ListItemButton>
									</ListItem>
								))}
							</List>
							{login !== null ? (
								<>
									<Divider />
									<List>
										{navigationSiteAdm.map((text, index) => (
											<ListItem key={index} disablePadding>
												<ListItemButton>
													<ListItemIcon>{text.icon}</ListItemIcon>
													<ListItemText primary={text.name} />
												</ListItemButton>
											</ListItem>
										))}
									</List>
								</>
							) : ''}
						</div>
						<div className="container_enter">
							<Link to="/login" className="link enter">
								Entrar
							</Link>
							<Link to="/register" className="link register">
								Cadastre-se
							</Link>
						</div>
					</ContainerNavibar>
				</Box>
			</Drawer>
		</>
	);
});

