import { BannerTemplate02 } from "../../components/Banner";
import { BannerSection } from "../../components/BannerSection";
import { CardCategory } from "../../components/CardCategory";
import { Category } from "../../components/Category";
import { HeaderPageTemplate02 } from "../../components/Header";
import { SectionOffDay } from "../../components/SectionOffDay";
import { SellersAll } from "../../components/SellersAll";
import { Container } from "./styles";

export const HomePage02 = () => {
	return (
		<>
			<HeaderPageTemplate02 />
			<Container>
				<BannerTemplate02 />

				<Category title="Categorias Populares" name="Ver mais" link="/" />
				<CardCategory />
				<SectionOffDay />
				<BannerSection />
				<SellersAll />
			</Container>
		</>
	);
};
