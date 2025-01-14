import { ContainerInput } from "./styles"

export const Input = ({name, value, onChange, placeholder}) => {
    return (
        <>
            <ContainerInput 
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    )
}