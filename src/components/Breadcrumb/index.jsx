import { Link } from "react-router-dom"
import { LinkStyle } from "../Header/styles"
import { Container } from "./styles"
import { IoIosArrowForward } from "react-icons/io"

export const Breadcrumb = ({title}) => {
    return (
        <Container>
            <LinkStyle to='/'>Painel</LinkStyle>
            <span><IoIosArrowForward size={12}/></span>
            <p>{title}</p>
        </Container>
    )
}