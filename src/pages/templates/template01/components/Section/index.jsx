import { ContainerSection } from "./styles"

export const Section = ({children, w}) => {

    return (
        <>
            <ContainerSection w={w}>
                {children}
            </ContainerSection>
        </>
    )

}