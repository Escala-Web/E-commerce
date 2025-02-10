import { useParams, useSearchParams } from "react-router-dom";
import { HeaderPageTemplate02 } from "../../components/Header";
import { Container } from "../home/styles";
import {
	Aside,
	AsideFilter,
	ContainerCardStyle,
	ContainerContent,
	ContainerProduct,
} from "./styles";
import { CardOffDay } from "../../components/CardOffDay";
import { useFecth } from "../../../../../hooks/useFecth";
import { https } from "../../../../../config/https";
import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumbs";

export const CategorieTemplate02 = () => {
	const { category } = useParams();
	const [data, setData] = useState([]);
	const { data: products, loading } = useFecth(
		"https://fakestoreapi.com/products"
	);

	const [searchParams] = useSearchParams();

	const categorySelect = searchParams.get("category");



	async function find() {
		try {
			const { data } = await https.get("/categories/get-categories");
			const filter = data.content.filter(
				(fil) => fil.parent_category_id == categorySelect
			);
			setData(filter);
		} catch (error) {
			console.log(filter);
		}
	}

	useEffect(() => {
		find();
	}, [categorySelect]);

	return (
		<>
			<HeaderPageTemplate02 />
			<Breadcrumb />
			<Container>
				<ContainerProduct>
					<Aside>
						<h4>Categoria</h4>
						<AsideFilter>
							{(data || []).map((d) => (
								<>
									<label>
										<input type="checkbox" />
										{d.name}
									</label>
								</>
							))}
						</AsideFilter>
					</Aside>
					<ContainerContent>
						<ContainerCardStyle>
							<CardOffDay data={products} />
						</ContainerCardStyle>
					</ContainerContent>
				</ContainerProduct>
			</Container>
		</>
	);
};
