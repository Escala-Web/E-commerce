import { useParams, useSearchParams } from "react-router-dom";
import { HeaderPageTemplate02 } from "../../components/Header";
import { Container } from "../home/styles";
import { Aside, ContainerContent, ContainerProduct } from "./styles";
import { CardOffDay } from "../../components/CardOffDay";
import { useFecth } from "../../../../../hooks/useFecth";
import { https } from "../../../../../config/https";
import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumbs";
import { CardProduct } from "../../components/CardProduct";
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Pagination,
	Radio,
	RadioGroup,
	Slider,
} from "@mui/material";
import { AsideProductsFilter } from "../../components/AsideProductsFilter";
import { Footer } from "../../components/Footer";

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
			<Breadcrumb />
			<Container>
				<ContainerProduct>
					<Aside>
						<AsideProductsFilter />
					</Aside>
					<ContainerContent>
						<CardProduct />
						
						<div className="container-pagination">
							<Pagination className="pagination" count={20} variant="outlined" shape="rounded" />
						</div>

					</ContainerContent>
				</ContainerProduct>
				
			</Container>
			<Footer />
		</>
	);
};
