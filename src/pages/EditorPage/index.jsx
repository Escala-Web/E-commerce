import { useParams } from "react-router-dom"
import { CardSection } from "../../components/CardSection"


export const EditorPage = () => {

    const {theme} = useParams()

    return (
        <>

            <CardSection>

                Thempla

            </CardSection>

        </>
    )
}