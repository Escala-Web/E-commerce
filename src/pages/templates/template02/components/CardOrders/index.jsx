import { Link } from "react-router-dom"
import { Container, ContainerCard } from "./styles"

export const CardOrders = () => {


    return (
        <>
        <Container>

            <ContainerCard>
                <div className="image">
                    <img src="https://a-static.mlcdn.com.br/800x560/forno-eletrico-de-bancada-mondial-com-timer-52l-preto-e-prata-grand-family-ii-fr-52/magazineluiza/236566500/58f7b38a4b95996433d13f62adc65a20.jpg"/>
                </div>
                <div className="content">
                    <p>Produto: Tenis Adidas tamanho 40</p>
                    <p>Valor: R$ 199,89</p>
                    <p>Pedido: 1454165414196</p>
                </div>
                <div className="container-link">
                    <Link className="link">Trocar Produto</Link>
                    <Link className="link">Ver Detalhes</Link>
                </div>
            </ContainerCard>
            
        </Container>
        </>
    )

}