import { ContainerButton } from "./styles"

export const Button = ({ type, name, margin, color }) => {

    return (
        <>
            <ContainerButton color={color} margin={margin}>
                <button type={type}>{name}</button>
            </ContainerButton>
        </>
    )

}