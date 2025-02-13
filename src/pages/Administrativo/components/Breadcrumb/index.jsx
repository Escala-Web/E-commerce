import { IoIosArrowForward } from "react-icons/io"
import { Container, ContainerBread, LinkStyle } from "./styles"

export const Breadcrumb = ({image, page}) => {

    return (
        <>
            <Container image={image}>
                <ContainerBread>
                    <div className="header-breadcrumb">
                    <LinkStyle to='/administrativo'>Dashboard</LinkStyle>
                    <IoIosArrowForward color="#fff" size={20}/>
                    <p>{page}</p>
                    </div>
                    
                    <h2>{page}</h2>
                </ContainerBread>
            </Container>
        </>
    )

}