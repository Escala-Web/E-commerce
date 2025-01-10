import { ContainerInput, InputStyle } from "./styles"

export const Input = ({name, value, type, label, onChange, placeholder, display}) => {
    return (
        <>

            <ContainerInput>
                <label>{label}</label>
                <InputStyle 
                    value={value}
                    name={name}
                    type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </ContainerInput>

        </>
    )
}