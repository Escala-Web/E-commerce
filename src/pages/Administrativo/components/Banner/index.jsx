import { useState } from "react"
import { ContentBanner } from "./Content"
import { HeaderBanner } from "./Header"
import { Container } from "./styles"

export const Banner = () => {

    const [isCreatedBanner, setIsCreatedBanner] = useState(1);
    

    return (
        <>
            <Container>
                <HeaderBanner setBannerMenu={setIsCreatedBanner}/>
                <ContentBanner bannerMenu={isCreatedBanner}/>
            </Container>
        </>
    )
}