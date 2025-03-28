import { useContext } from "react"
import { TemplateContext } from "../../../../context/Template"
import { LoadingTemplate01 } from "../../../templates/template01/components/Loading";

export const Loading = () => {

    const { template } = useContext(TemplateContext)

    switch (template) {
        case 1:
            return <LoadingTemplate01 />
            break;
    
        default:
            break;
    }

}