import { useContext } from "react";
import { LoginPageTemplate01 } from "../../../templates/template01/pages/Login";
import { LoginTemplete02 } from "../../../templates/template02/pages/Login";
import { HeaderPageTemplate02 } from "../../../templates/template02/components/Header";
import { HeaderPageTemplate01 } from "../../../templates/template01/components/Header";
import { TemplateContext } from "../../../../context/Template";


export const LoginEcommece = ({ user }) => {
    const {template} = useContext(TemplateContext);

    switch (template) {
        case 1:
            return (
                <>
                    {/* <HeaderPageTemplate01 /> */}
                    <LoginPageTemplate01 user={user}/>
                </>
            )
            break;
        case 2:
            return (
                <>
                    {/* <HeaderPageTemplate02 />; */}
                    <LoginTemplete02 user={user}/>
                </>
            )
            break
        default:
            break;
    }


};
