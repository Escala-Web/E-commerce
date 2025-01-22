import { BannerPageOne } from "../../components/Banner";
import { CardProduct } from "../../components/CardProduct";
import { CardSection } from "../../components/CardSection";
import { HeaderPageTemplate01 } from "../../components/Header";
import { SectionOfTheDay } from "../../components/SectionOfTheDay";
import { Container } from "./styles";

export const HomePage01 = () => {
	return (
		<>
			<HeaderPageTemplate01 />
			<Container>
				<BannerPageOne />
				<SectionOfTheDay />
				<CardSection title='Populares' m='2rem 0'>
					<CardProduct />
				</CardSection>

				<CardSection title='Mais pesquisados' m='2rem 0'>
					<CardProduct />
				</CardSection>
			</Container>
		</>
	);
};
