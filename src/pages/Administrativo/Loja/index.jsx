import { Breadcrumb } from "../../../components/Breadcrumb/index.jsx"
import { CardSection } from "../../../components/CardSection"
import { CardThemes } from "../../../components/CardThemes/index.jsx"
import { ContainerBody } from "./styles.js"

export const LojaPage = () => {

    const themes = [
        {
            id: 1,
            name: 'Loja 1',
            image: 'https://placehold.co/480x320',
            link: '/loha-01'
        },
        {
            id: 2,
            name: 'Loja 2',
            image: 'https://placehold.co/480x320',
            link: '/loha-02'
        },
        {
            id: 3,
            name: 'Loja 3',
            image: 'https://placehold.co/480x320',
            link: '/loha-03'
        },
        {
            id: 4,
            name: 'Loja 4',
            image: 'https://placehold.co/480x320',
            link: '/loha-04'
        },
    ]

    return(
        <>

            <Breadcrumb title='Loja Virtual'/>
            <ContainerBody>
                <CardSection w='100%'>

                    <CardThemes data={themes} title='Themas Disponiveis'/>

                </CardSection>

            </ContainerBody>
        </>
    )
}