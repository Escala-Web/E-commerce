import { CardCategory } from "../CardCategory"
import { CardOffDay } from "../CardOffDay"
import { Category } from "../Category"
import { Container, ContainerCard } from "./styles"

export const SellersAll = () => {


    return (
        <>
            <Container>
                <Category title='Mais vendidos' link='/' name='Ver mais'/>
                <ContainerCard>
                    <CardOffDay />
                    <CardOffDay />
                    <CardOffDay />
                    <CardOffDay />
                    <CardOffDay />
                    <CardOffDay />
                    <CardOffDay />
                    <CardOffDay />
                </ContainerCard>
            </Container>
        </>
    )
}