import { Container, ContainerContent, ContainerContentImage, ContainerHeader, ContainerHeaderBanner, ContainerHeaderBannerImage, ContainerHeaderBannerText } from "./styles"
import pcimage from '../../../../../assets/pc.png';
import { CardProduct } from "../CardProduct";
export const SectionDetails = () => {

    return (
        <>
            <Container>
                <ContainerHeader>
                    <ContainerHeaderBanner>
                        <ContainerHeaderBannerText>
                            <h3>Notebook 13 super</h3>
                            <p>Apartir de <span>R$1.363,00</span></p>
                        </ContainerHeaderBannerText>
                        <ContainerHeaderBannerImage>
                        <img src={pcimage}/>
                        </ContainerHeaderBannerImage>
                    </ContainerHeaderBanner>
                    <ContainerContentImage>
                        <img src="https://a-static.mlcdn.com.br/800x560/celular-samsung-galaxy-m15-5g-6-000mah-camera-tripla-ate-50mp-128gb/samsung/6170/758027715621830de6200b29c573f342.jpeg"/>
                        <p>Apple</p>
                        <img src="https://a-static.mlcdn.com.br/800x560/celular-samsung-galaxy-m15-5g-6-000mah-camera-tripla-ate-50mp-128gb/samsung/6170/758027715621830de6200b29c573f342.jpeg"/>
                        <p>Apple</p>
                        <img src="https://a-static.mlcdn.com.br/800x560/celular-samsung-galaxy-m15-5g-6-000mah-camera-tripla-ate-50mp-128gb/samsung/6170/758027715621830de6200b29c573f342.jpeg"/>
                        <p>Apple</p>
                        <img src="https://a-static.mlcdn.com.br/800x560/celular-samsung-galaxy-m15-5g-6-000mah-camera-tripla-ate-50mp-128gb/samsung/6170/758027715621830de6200b29c573f342.jpeg"/>
                        <p>Apple</p>
                    </ContainerContentImage>
                </ContainerHeader>
                <ContainerContent>
                    <CardProduct />
                </ContainerContent>
            </Container>
        </>
    )
}