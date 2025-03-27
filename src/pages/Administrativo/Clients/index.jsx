import { CardDashboard } from "../components/CardDashboard"
import { Container } from "./styles"
import { FaUser } from "react-icons/fa";
import { TableUser } from "./TableUser";
import { useUsers } from "../../../hooks/Admin/User/useUsers";
import { useState } from "react";

export const ClientAdm = () => {

    const { data: client } = useUsers();

    function clientStatus(status) {
        const clientesAtivos = client?.content?.filter((clin) => clin.status === status)
        return clientesAtivos;
    }


    const clientsInactive = clientStatus('INACTIVE');
    const clientsActives = clientStatus('ACTIVE');

    return (
        <>
            <Container>
                <div className="container">
                    <CardDashboard 
                        name='Clientes ativos'
                        icon={<FaUser />}
                        color='#0089ff'
                        data={clientsActives?.length}
                    />
                    <CardDashboard 
                        name='Clientes Inativos'
                        icon={<FaUser />}
                        data={clientsInactive?.length}
                    />
                    <CardDashboard 
                        name='Total de Clientes'
                        icon={<FaUser />}
                        color='#0089ff'
                        data={'15'}
                    />
                    <CardDashboard 
                        name='Total de Clientes'
                        icon={<FaUser />}
                        color='#0089ff'
                        data={client?.content.length}
                    />
                </div>
                <TableUser data={client?.content}/>
            </Container>
        </>
    )
}