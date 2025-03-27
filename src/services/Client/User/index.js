import { api } from "../../../lib/api";

export const createUserClientAll = async (userData) => {

    let person;

    if (userData.type === "NATURAL") {
        person = {
            cpf: userData.cpf.replace(/\D/g, ""), // Remove pontos e traços
            dt_birth: userData.dt_birth,
            gender: userData.gender,
        };
    } else {
        person = {
            cnpj: userData.CNPJ.replace(/\D/g, ""), // Remove pontos e traços
            corporate_name: userData.corporate_name,
            trade_name: userData.trade_name,
            state_registration: userData.state_registration,
        };
    }
    
    let jsonUserCreate = {
        username: userData.username,
        email: userData.email,
        password: userData.password,
        type: userData.type,
        person,
        address: {
            public_area: userData.public_area,
            number: userData.number,
            complement: userData.complement,
            district: userData.district,
            city: userData.city,
            state: userData.state,
            zip_code: userData.zip_code.replace(/\D/g, ""), // Remove pontos e traços
        },
        phone: {
            type: "WHATSAPP",
            number: userData.phone.replace(/\D/g, ""), // Remove pontos e traços
        },
    };
    

    console.log(jsonUserCreate)

    const response = await api.post('/user/register', jsonUserCreate);

	return response.data;
};
