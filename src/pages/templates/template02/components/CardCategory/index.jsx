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
                                <img src="https://files.tecnoblog.net/wp-content/uploads/2021/12/scuf-reflex-pro.jpg" title={cat.category}/>
                            </ContainerImageCategory>
                            <p>{cat.name}</p>
                        </ContainerCard>
                    </>
                ))}
            </Container>
        </>
    )

}