import { useContext } from "react"
import { Breadcrumb } from "../../../components/Breadcrumb/index.jsx"
import { CardSection } from "../../../components/CardSection"
import { CardThemes } from "../../../components/CardThemes/index.jsx"
import { ContainerBody } from "./styles.js"
import { TemplateContext } from "../../../context/Template.jsx"

import theme01 from '../assets/thema01.jpg'
import theme02 from '../assets/thema02.jpg'

export const LojaPage = () => {

    

    const themes = [
        {
            id: 1,
            name: 'Template 01',
            image: theme01,
            link: '/loha-01'
        },
        {
            id: 2,
            name: 'Template 02',
            image: theme02,
            link: '/loha-02'
        }
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