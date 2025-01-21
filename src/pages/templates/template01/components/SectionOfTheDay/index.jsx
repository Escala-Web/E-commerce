import { BannerOfTheDay } from "../BannerOfTheDay";
import { ContainerCard, ContainerCardContainer } from "../BannerOfTheDay/styles";
import { BannerOfTheDayContent } from "../BannerOfTheDayContent";
import { Section } from "../Section";
import {
	Container,
	ContainerContent,
	ContainerSection,
	ContainerSubTitle,
} from "./styles";

export const SectionOfTheDay = () => {
	return (
		<>
			<Container>
				<Section w="70%">
					<ContainerSection>
						<ContainerSubTitle>
							<h3>Ultimos dias de Promoções</h3>
						</ContainerSubTitle>
						<ContainerContent>
							<BannerOfTheDay />

							<BannerOfTheDayContent />
						</ContainerContent>
					</ContainerSection>
				</Section>
				<Section w='30%'>
					<ContainerCardContainer>
                        <ContainerCard>
                            <img src='https://imgs.casasbahia.com.br/55066421/1g.jpg'/>
                        </ContainerCard>
                        <ContainerCard>
                            <img src='https://imgs.casasbahia.com.br/55066421/2g.jpg'/>
                        </ContainerCard>
                    </ContainerCardContainer>
				</Section>
			</Container>
		</>
	);
};
