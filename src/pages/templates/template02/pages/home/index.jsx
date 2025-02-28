import { BannerTemplate02 } from "../../components/Banner";
import { BannerSection } from "../../components/BannerSection";
import { CardCategory } from "../../components/CardCategory";
import { CardProductHome } from "../../components/CardProductHome";
import { Category } from "../../components/Category";
import { Footer } from "../../components/Footer";
import { HeaderPageTemplate02 } from "../../components/Header";
import { SectionLancamento } from "../../components/SectionLancamento";
import { Container } from "./styles";

export const HomePage02 = () => {
	return (
		<>
		
			<BannerTemplate02 />
			<Container>
				<Category title="Categorias Populares" name="Ver mais" link="/" />
				<CardCategory />
				<Category title="Principais Produtos" name="Ver mais" link="/produtos" />
				<CardProductHome />

				<BannerSection />

				<Category title="Confira os lançamentos" name="Ver mais" link="/produtos" />
				<SectionLancamento />
			</Container>
			<Footer />
		</>
	);
};
