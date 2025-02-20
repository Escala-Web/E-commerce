import { useContext } from "react";
import { HeaderPageTemplate02 } from "../../components/Header";
import { Container } from "../home/styles";
import { ContainerContent } from "./styles";
import { AuthContext } from "../../../../../context/Auth";
import { FaUserCircle } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { TbArrowsExchange } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { HeaderAdmimTemplate02 } from "./Header";

export const AdminTemplate02 = () => {
	const { login } = useContext(AuthContext);

	const headerUser = [
		{
			title: "Meus Pedidos",
			icon: <FaTruck />,
			active: true,
		},
		{
			title: "Trocas",
			icon: <TbArrowsExchange />,
			active: false,
		},
		{
			title: "Meus Dados",
			icon: <FaUserCircle />,
			active: false,
		},
		{
			title: "Endereço",
			icon: <MdLocationOn />,
			active: false,
		},
	];

	return (
		<>
            {/* Header padrao para usuarios */}
			<HeaderAdmimTemplate02>
                
            </HeaderAdmimTemplate02>
		</>
	);
};
