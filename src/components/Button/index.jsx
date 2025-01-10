import { ContainerButton } from "./styles"

export const Button = ({ type, name, margin }) => {

    return (
        <>
            <ContainerButton margin={margin}>
                <button type={type}>{name}</button>
            </ContainerButton>
        </>
    )

}