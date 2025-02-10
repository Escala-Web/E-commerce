import { useCategory } from "../../../../../hooks/useCategory";
import { Container, ContainerCard, ContainerImageCategory } from "./styles";


export const CardCategory =  () => {


    const { category } = useCategory();
    
    

    return (
        <>
            <Container>
                {(category.content || []).map((cat) => (
                    <>
                        <ContainerCard to={`${cat.name.toLowerCase().replace(/\s+/g, "-")}?category=${cat.id_category}`}>
                            <ContainerImageCategory>
                                <p style={{zIndex: '9999'}}>Image</p>
                            </ContainerImageCategory>
                            <p>{cat.name}</p>
                        </ContainerCard>
                    </>
                ))}
            </Container>
        </>
    )

}