import { Pagination } from "@mui/material";
import { AsideProductsFilter } from "../../components/AsideProductsFilter";
import { Breadcrumb } from "../../components/Breadcrumbs";
import { HeaderPageTemplate02 } from "../../components/Header";

import {
	Aside,
	ContainerContent,
	ContainerProduct,
} from "../Categories/styles";
import { Container } from "../home/styles";
import { Footer } from "../../components/Footer";
import { CardProduct } from "../../components/CardProduct";

export const ProdutosTemplate02 = () => {
	return (
		<>
			<HeaderPageTemplate02 />
			{/* <Breadcrumb /> */}
			<Container>
			<br />
			<br />
				<ContainerProduct>
					<Aside>
						<AsideProductsFilter />
					</Aside>
					<ContainerContent>
						<CardProduct />

						<div className="container-pagination">
							<Pagination
								className="pagination"
								count={20}
								variant="outlined"
								shape="rounded"
							/>
						</div>
					</ContainerContent>
				</ContainerProduct>
			</Container>
			<Footer />
		</>
	);
};
