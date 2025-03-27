import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { ContainerBreadcrumb } from "./styles";

export const BreadCrumb = ({ name, count }) => {

    return (
        <>
            <ContainerBreadcrumb>
                <div className="container">
                    <Link to='/'>Página Inicial</Link>
                    <IoMdArrowDropright />
                    <p>{name}</p>
                </div>
                <div className="container_qtd">
                    <p>Produtos encontrados ({count})</p>
                </div>
            </ContainerBreadcrumb>
        </>
    )
}