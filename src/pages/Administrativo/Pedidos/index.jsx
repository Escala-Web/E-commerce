import { useOrder } from "../../../hooks/orders/useOrder";
import { Breadcrumb } from "../components/Breadcrumb"
import { CardDashboard } from "../components/CardDashboard"
import { Container } from "./styles";
import { FaClipboardList, FaTimesCircle, FaCheck , FaClock } from "react-icons/fa";

export const Pedidos = () => {

    const { data: orders } = useOrder();

    return (
        <>
            <Container>
                <div className="container">
                    <CardDashboard 
                        name='Pedidos'
                        data='213'
                        icon={<FaClipboardList />}
                        color='#007bff'
                    />
                    <CardDashboard 
                        name='Pedidos Pendentes'
                        data='213'
                        icon={<FaClock  />}
                        color='#ffc107'
                    />
                    <CardDashboard 
                        name='Pedidos Cancelados'
                        data='213'
                        icon={<FaTimesCircle />}
                        color='#dc3545'
                    />
                    <CardDashboard 
                        name='Pedidos Concluidos'
                        data='213'
                        icon={<FaCheck   />}
                        color='#28a745'
                    />
                </div>
            </Container>
        </>
    )
}