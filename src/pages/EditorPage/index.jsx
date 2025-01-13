import { useParams } from "react-router-dom"
import { CardSection } from "../../components/CardSection"
import { ContainerContentEditor } from "./styles"
import { Header } from "../../components/Header"


export const EditorPage = () => {

    const {theme} = useParams()



    return (
        <>

            <div>
            
            <ContainerContentEditor >
                        <CardSection w="100%">

            Thempla {theme}

            </CardSection>
            </ContainerContentEditor>
            </div>


        </>
    )
}

