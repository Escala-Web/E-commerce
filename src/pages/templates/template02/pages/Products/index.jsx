import { useBreads } from "../../../../../hooks/Breads/useBreads";
import { useCategories } from "../../../../../hooks/Category/useCategories";
import { useProducts } from "../../../../../hooks/Products/useProducts";
import { Breadcrumb } from "../../components/Breadcrumbs";
import { CardProduct } from "../../components/Cards/CardProduct";
import { Filters } from "../../components/Filters";
import { Container } from "./styles";

export const ProdutosTemplate02 = () => {

	const { findAll: categories } = useCategories();
	const { findAll } = useBreads();
	const { data: brands } = findAll;

	const { findAll: fidAllProducts, getAllByProducts } = useProducts('brand', '8','1');
	const { data: products } = fidAllProducts;

	const { data: category } = categories

	const { data: getAllBy} = getAllByProducts


	return (
		<>

			<Container>
				<div className="container_product">
					<aside className="product_aside">
						<Filters 
							category={category}
							brands={brands?.content}
							price={''}
						/>
					</aside>
					<main>
						<Breadcrumb page='Produtos' productQTD={products?.page}/>
						<CardProduct data={products?.content}/>
					</main>
				</div>
			</Container>

		</>
	);
};
