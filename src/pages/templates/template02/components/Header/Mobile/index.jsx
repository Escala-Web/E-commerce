import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { useCategory } from "../../../../../../hooks/useCategory";

export const MobileHeader = () => {
	const [openLogin, setOpenLogin] = useState(false);
	const [isAccordionOpen, setIsAccordionOpen] = useState(false);
	const [isOpenLogar, setIsOpenLogar] = useState(false);

	const { category } = useCategory();

	return (
		<>
			<Container>
				<div className="header-mobile-logar">
					<div className="mobile-logar">
						<HiMiniUsers />
						<p>Entrar</p>
					</div>
					<spam
						onClick={() => setIsOpenLogar(!isOpenLogar)}
						className="mobile-drop"
					>
						<MdArrowDropDown />
					</spam>
				</div>
				{isOpenLogar && (
					<ul className="logar-mobile">
						<li>
							<Link to="/login" className="header-mobile-link-logar">
								Entrar
							</Link>
							<Link to="/registrar" className="header-mobile-link-register">
								Registrar
							</Link>
						</li>
					</ul>
				)}
				<ul className="header-mobile-navigation">
					<li className="header-mobile-list-li">
						<Link className="header-mobile-link">Página Inicial</Link>
					</li>
					<li className="header-mobile-list-li">
						<Link className="header-mobile-link">Produtos</Link>
					</li>
					<li className="header-drop-mobile">
						<div className="header-mobile-list-li">
							<Link className="header-mobile-link">Categorias</Link>
							<spam
								className="mobile-drop"
								onClick={() => setIsAccordionOpen(!isAccordionOpen)}
							>
								<MdArrowDropDown />
							</spam>
						</div>

						{isAccordionOpen && (
							<div className="accordion-content">
								<ul>
									{category.content?.map((cat) => (
										<li>
											<Link
												to={`${cat.name
													.toLowerCase()
													.replace(/\s+/g, "-")}?category=${cat.id_category}`}
													className="header-mobile-link"
											>
												{cat.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						)}
					</li>
					<li className="header-mobile-list-li">
						<Link className="header-mobile-link">Contato</Link>
					</li>
				</ul>
			</Container>
		</>
	);
};
