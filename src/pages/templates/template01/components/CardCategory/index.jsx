import { Link } from "react-router-dom";
import { useCategories } from "../../../../../hooks/Category/useCategories";
import { Container } from "./styles";
import { CardProduct } from "../CardProduct";
import { useProducts } from "../../../../../hooks/Products/useProducts";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

export const CardCategory = () => {
	const { findAll } = useCategories();
	const [idCategory, setIdCategory] = useState(196);
	const { getAllByProducts } = useProducts("category", idCategory, 1);
	const { data: category } = findAll;

	const { data: productCategories } = getAllByProducts;

	const scrollRef = useRef(null);

	// Função para rolar para a esquerda
	const scrollLeft = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: -284, behavior: "smooth" });
		}
	};

	// Função para rolar para a direita
	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: 284, behavior: "smooth" });
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
		  if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: 284, behavior: "smooth" });
	
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
			if (scrollLeft + clientWidth >= scrollWidth) {
			  scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
			}
		  }
		}, 3000);
	
		return () => clearInterval(interval);
	  }, []);

	return (
		<>
			<Container>
				<>
					<div className="container_category">
						{category?.parents?.map((cat) => (
							<div className="card_category" key={cat.id_category}>
								<button onClick={() => setIdCategory(cat.id_category)}>
									{cat.name}
								</button>
							</div>
						))}
					</div>
			
					<button className="left" onClick={scrollLeft}>
					<IoIosArrowDropleftCircle />

					</button>
					<CardProduct
						data={productCategories?.content.slice(0, 8)}
						flex={false}
						scroll={scrollRef}
					/>
					<button className="right" onClick={scrollRight}>
						<IoIosArrowDroprightCircle />
					</button>
	
				</>
			</Container>
		</>
	);
};
