import { useContext } from "react"
import { TemplateContext } from "../../../../context/Template"
import { BannerPageOne } from "../../../Administrativo/EditorPage/components/Banners/BannerPageOne";
import { BannerPageTwo } from "../../../Administrativo/EditorPage/components/Banners/BannerPageTwo";
import { Banners } from "../../../Administrativo/EditorPage/components/Banners";

export const BannerPage = () => {

    const {banner} = useContext(TemplateContext);

    return (
        <>
            
            <Banners />
        
        </>
    )

}