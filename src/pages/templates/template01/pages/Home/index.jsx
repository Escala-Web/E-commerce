import { BannerPageOne } from "../../components/Banner";
import { CardCategory } from "../../components/CardCategory";
import { CardProduct } from "../../components/CardProduct";
import { CardSection } from "../../components/CardSection";
import { SectionOfTheDay } from "../../components/SectionOfTheDay";

import { ContainerGlobal } from "../../../../../styles/styleGlobal";
import { CardBreads } from "../../components/CardBrands";
import { CardDestaques } from "../../components/CardDestaques";

export const HomePage01 = () => {
	return (
		<>
			<BannerPageOne />
			<ContainerGlobal>
				<CardSection title="Principais Categorias" m="2rem auto">
					<CardCategory />
				</CardSection>

				{/* <SectionOfTheDay />

				<CardSection title="Principais Marcas" m="2rem 0">
					<CardBreads />
				</CardSection>

				<CardSection title="Destaques do dia" m="2rem auto 2rem">
					<CardDestaques />
				</CardSection> */}
			</ContainerGlobal>
		</>
	);
};
