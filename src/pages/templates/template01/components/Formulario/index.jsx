import { ContainerFormulario } from "./styles"

export const Formulario = ({submit, title, children, bg, w, p}) => {


    return (
        <>
            <ContainerFormulario w={w} bg={bg} p={p} onSubmit={submit}>
                <h2>{title}</h2>
                {children}
            </ContainerFormulario>
        </>
    )

}