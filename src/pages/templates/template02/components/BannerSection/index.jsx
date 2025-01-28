import bannerS from '../../../../../assets/banners.png';
import { Container, ContainerDescription } from './styles';

export const BannerSection = () => {

    return (
        <>
            <Container>
                <ContainerDescription>
                    <h2>Relógio Smart Digital Y8 Original </h2>
                    <h3>R$237.63</h3>
                </ContainerDescription>
                <div>
                    <img src={bannerS}/>
                </div>
            </Container>
        </>
    );
}