import { useParams } from "react-router-dom"
import { useContext } from "react"
import { CardSection } from "../../../../../components/CardSection"
import { ContainerContentEditor } from "../../styles"
import { Title } from "../../../../../components/Title"
import { TemplateContext } from "../../../../../context/Template"


export const EditorPage = () => {

    const {theme} = useParams();
    const {setTemplate} = useContext(TemplateContext);

    setTemplate(theme);

    return (
        <>

            <div>
            
            <ContainerContentEditor >
                        <CardSection w="100%">

            <Title>Thema</Title> {theme}

            </CardSection>
            </ContainerContentEditor>
            </div>


        </>
    )
}

