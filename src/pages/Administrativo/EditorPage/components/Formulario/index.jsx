import { FormularioStyle } from "./styles"

export const Formulario = ({children, w, submit}) => {

    return (
        <>
            <FormularioStyle onSubmit={submit} w={w}>
                {children}
            </FormularioStyle>

        </>
    )

}