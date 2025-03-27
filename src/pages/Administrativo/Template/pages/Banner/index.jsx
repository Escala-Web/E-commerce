import { Container, ContainerCard } from "./styles"
import { CardBanner } from "./Ui/CardBanner"

export const BannerAdm = () => {


    return (
        <>
           <Container>
                <div className="container_banner">
                    <div className="container create_banner">Create banneer</div>
                    <div className="container position_banner">Orders banners</div>
                </div>
                
                
                <div className="container">
                    <div className="banner_content">
                        <h4>sub title</h4>
                        <h3>Meus banners</h3>
                    </div>
                    
                    <CardBanner />
            
                </div>
           </Container>

        </>
    )
}