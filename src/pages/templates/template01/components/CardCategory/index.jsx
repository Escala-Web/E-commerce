import { Container, ContainerCard, ContainerImageCategory } from "./styles";


export const CardCategory = () => {

    const arrayCategorys = ['Gaming', 'Sports', 'Mobiles', 'Offices', 'Cameras', 'Monitores'];

    return (
        <>
            <Container>
                {arrayCategorys.map((name) => (
                    <>
                        <ContainerCard>
                            <ContainerImageCategory>
                                <p style={{zIndex: '9999'}}>Image</p>
                            </ContainerImageCategory>
                            <p>{name}</p>
                        </ContainerCard>
                    </>
                ))}
            </Container>
        </>
    )

}