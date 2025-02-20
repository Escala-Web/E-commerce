import { CardOrders } from "../../../components/CardOrders"
import { HeaderAdmimTemplate02 } from "../Header"
import { ContainerBody } from "./styles"

export const OrdersTemplates02 = () => {

    return (
        <>
            <HeaderAdmimTemplate02>

                <ContainerBody>
                    <div className="header">
                        <h3>Meus Pedidos</h3>
                    </div>
                    <CardOrders />
                </ContainerBody>

            </HeaderAdmimTemplate02>
        </>
    )
}