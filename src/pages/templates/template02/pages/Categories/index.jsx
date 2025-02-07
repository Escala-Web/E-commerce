import { useParams } from "react-router-dom"
import { HeaderPageTemplate02 } from "../../components/Header";
import { Container } from "../home/styles";
import { Aside, ContainerProduct } from "./styles";

export const CategorieTemplate02 = () => {

    const { category } = useParams();

    return (
        <>
        <HeaderPageTemplate02 />
        <Container>

            <ContainerProduct>
                <Aside>
                    Menu Categorias
                </Aside>
                <div>
                    <h2>Produtos {category}</h2>
                </div>
            </ContainerProduct>
        </Container>
        </>
    )

}