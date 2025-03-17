
import { useContext } from "react";
import { BannerPageOne } from "../../components/Banner";
import { CardCategory } from "../../components/CardCategory";
import { CardProduct } from "../../components/CardProduct";
import { CardSection } from "../../components/CardSection";
import { HeaderPageTemplate01 } from "../../components/Header";
import { SectionDetails } from "../../components/SectionDetails";
import { SectionOfTheDay } from "../../components/SectionOfTheDay";
import { Container } from "./styles";

export const HomePage01 = () => {

	return (
		<>
			<HeaderPageTemplate01 />
			<Container>
				<BannerPageOne />
				<CardSection title="Categorias" m="2rem 0">
					<CardCategory />
				</CardSection>
				<SectionOfTheDay />
				<CardSection title="Populares" m="2rem 0">
					<CardProduct />
				</CardSection>
				<CardSection title="Melhores notebooks" m="2rem 0">
					<SectionDetails />
				</CardSection>
			</Container>
		</>
	);
};
