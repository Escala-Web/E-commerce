import { createContext, useState } from "react";
import { https } from "../config/https";
import { toast } from "react-toastify";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    type: "NATURAL",
    gender: "",
    cpf: "",
    dt_birth: "",
    zip_code: "",
    public_area: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    trade_name: "", // Para pessoa jurídica
    corporate_name: "", // Para pessoa jurídica
    state_registration: "" // Para pessoa jurídica
  });

  const typePerson = formData.type === "NATURAL" ? "Fisica" : "Juridica";

  function handleForm(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  async function submitCreateUser() {
    const phone = formData.phone.replace(/[\(\)\-\s]/g, '');
    const cpf = formData.cpf.replace(/[\.\-\s]/g, '');

    const person = formData.type === "NATURAL" ? {
      cpf: cpf,
      dt_birth: formData.dt_birth,
      gender: formData.gender
    } : {
      cnpj: formData.cnpj,
      corporate_name: formData.corporate_name,
      trade_name: formData.trade_name,
      state_registration: formData.state_registration
    };

    const jsonData = {
      "username": formData.name,
      "email": formData.email,
      "password": formData.password,
      "type": formData.type,
      "person": person,
      "address": {
        "public_area": formData.public_area,
        "number": formData.number,
        "district": formData.neighborhood,
        "city": formData.city,
        "state": formData.state,
        "complement": formData.complement,
        "zip_code": formData.zip_code.replace('-', ''),
      },
      "phone": {
        "type": "WHATSAPP",
        "number": phone
      }
    };

    try {
      await https.post('/user/register', jsonData);
      toast.success("Usuário cadastrado com sucesso");
    } catch (error) {
      toast.error("Erro ao cadastrar usuário");
      console.log(error);
    }
  }

  return (
    <RegisterContext.Provider
      value={{
        formData,
        setFormData,
        typePerson,
        handleForm,
        submitCreateUser
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
