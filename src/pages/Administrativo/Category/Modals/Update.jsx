import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderTemplateEditor } from "../../Template/components/Header";
import { ButtonTemplate } from "../../Template/components/Button";
import { ContainerPage } from "../../components/Section";
import { Form } from "../../components/Form";
import { AuthContext } from "../../../../context/Auth";
import { ContainerModalSection } from "../styles";
import { https } from "../../../../config/https";


export const UpdateCategory = ({data}) => {
    
    const navigate = useNavigate();
	const goCreateProduct = () => navigate("/administrativo/categoria/create");
	const goAllProduct = () => navigate("/administrativo/categoria");

    const [category, setCategory] = useState([]);
    const {login} = useContext(AuthContext);

    function handleChange(event) {

        const {name,value} = event.target;

        setCategory((prevCategory) => ({
            ...prevCategory,
            [name]: value
        }))
    }

    async function submit(event) {
        event.preventDefault();
        try {
            const {data} = await https.put
        } catch (error) {
            
        }
    
    }

    

	return (
		<>

            <ContainerModalSection>
				<Form submit={submit} name="Cadastre um categoria">
					<label>Nome da Categoria</label>
					<input 
                        type="text"
                        name="name"
                        placeholder="Digite o nome da Categoria*"
                        value={data?.name}
                    />

					<label>Descrição da Categoria</label>
					<input 
                        type="text"
                        name="description"
                        placeholder="Descrição da Categoria"
                        value={data?.description}
                    
                    />
					<label>Categoria Principal</label>
					<input 
                        type="text" 
                        name="parent_category"
                        placeholder="Nome da Categoria Principal"
                    />

                    <input 
                        name="id_category"
                        value={data?.id_category}
                    />
					
					<button>Editar</button>
				</Form>
			</ContainerModalSection>


            


		</>
	);
}