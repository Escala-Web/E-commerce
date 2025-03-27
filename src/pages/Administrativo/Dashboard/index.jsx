import { Breadcrumb } from "../components/Breadcrumb";
import { Container } from "./styles";
import { CardPersonalizado } from "./ui/CardPersonalizado";
import { FaEye, FaMoneyBillTransfer } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa";
import { Graph } from "./ui/Graph";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardDashboard } from "../components/CardDashboard";
import { useUsers } from "../../../hooks/Admin/User/useUsers";
export const Dashboard = () => {
	const [dashSelect, setDataSelect] = useState({
		page: "sales",
		isActive: true,
	});

	const navigate = useNavigate();

	function clients() {
		navigate('/administrativo/clientes')
		setDataSelect({ page: "clients", isActive: true })
	}

	const { data: client } = useUsers();


	return (
		<>
			<Container>
				<div className="container_section">
					<CardDashboard
						isActive={dashSelect.page === "sales"} 
						click={() => setDataSelect({ page: "sales", isActive: true })}
						name="Faturamento"
						color="#4AD991"
						icon={<FaMoneyBillTransfer />}
					/>
					<CardDashboard
						isActive={dashSelect.page === "order"}
						click={() => setDataSelect({ page: "order", isActive: true })}
						name="Pedidos"
						color="#FEC53D"
						icon={<FaBoxOpen />}
					/>
					<CardDashboard
						isActive={dashSelect.page === "clients"}
						click={clients}
						name="Clientes"
						color="#0089ff"
						icon={<FaUserTag />}
						data={client?.content?.length}
					/>
					<CardDashboard
						isActive={dashSelect.page === "access"}
						click={() => setDataSelect({ page: "access", isActive: true })}
						name="Acessos"
						color="#0089ff"
						icon={<FaEye />}
					/>
				</div>
				<div className="container_section">
					<Graph option={dashSelect} />
				</div>
			</Container>
		</>
	);
};
