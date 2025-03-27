import { useProducts } from "../../../../../hooks/Products/useProducts"
import { ContainerGlobal } from "../../../../../styles/styleGlobal"
import { BreadCrumb } from "../../components/Breadcrumb"
import { CardProduct } from "../../components/CardProduct"
import { ContainerProducts } from "./styles"

export const ProductsTemplate01 = () => {

    const { findAll } = useProducts();
    const { data: products } = findAll;

    return (
        <>
            <ContainerGlobal>
                <ContainerProducts>
                    <div className="container_menu">

                    </div>
                    <div className="container_product">
                        <BreadCrumb name='Produtos' count={products?.page?.total}/>
                        <CardProduct w={'258px'} data={products?.content}/>
                    </div>
                </ContainerProducts>
            </ContainerGlobal>
        </>
    )
}