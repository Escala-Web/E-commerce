import { Children } from "react"
import { Link } from "react-router-dom"
import { ContainerLinkStyle } from "./styles"

export const LinkButton = ({children, link}) => {
    return (
        <>
            <ContainerLinkStyle to={link}>{children}</ContainerLinkStyle>
        </>
    )
}