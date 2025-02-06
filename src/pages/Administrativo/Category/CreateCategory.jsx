import { useNavigate } from "react-router-dom";
import { HeaderTemplateEditor } from "../Template/components/Header";
import { ButtonTemplate } from "../Template/components/Button";
import { ContainerPage, ContainerPageSectionBody } from "../components/Section";
import { Form } from "../components/Form";
import { useContext, useEffect, useState } from "react";
import { https } from "../../../config/https";
import { AuthContext } from "../../../context/Auth";
import { toast } from "react-toastify";

export const CreateCategoryPageAdm = () => {
    
    const navigate = useNavigate();
	const goCreateProduct = () => navigate("/administrativo/categoria/create");
	const goAllProduct = () => navigate("/administrativo/categoria");

    const [category, setCategory] = useState({});
    const [categoryParent, setCategoryParent] = useState([]);
    const {login} = useContext(AuthContext);

    function handleChange(event) {

        const {name,value} = event.target;

        setCategory((prevCategory) => ({
            ...prevCategory,
            [name]: value
        }))
    }

    async function submit(event) {
        console.log(category)
        event.preventDefault();

        try {
            const { data } = await https.post('/categories/create', {
                name: category.name,
                description: category.description,
                parent_category: category.parent_category
            }, 
            {
                headers: {
                    'Authorization': `Bearer ${login[0].token}`
                }
            }
        );
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    async function findAllParent() {

        try {
            const {data} = await https.get('/categories/get-parents');
            setCategoryParent(data.content)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        findAllParent();
    }, [])

    console.log(categoryParent)

	return (
		<>
			<HeaderTemplateEditor page="Categorias">
				<ButtonTemplate click={goAllProduct}>Minhas Categorias</ButtonTemplate>
				<ButtonTemplate click={goCreateProduct}>Cadastrar</ButtonTemplate>
			</HeaderTemplateEditor>
            <ContainerPage>
				<Form submit={submit} name="Cadastre um categoria">
					<label>Nome da Categoria</label>
					<input 
                        type="text"
                        name="name"
                        placeholder="Digite o nome da Categoria*"
                        onChange={handleChange}
                    />

					<label>Descrição da Categoria</label>
					<input 
                        type="text"
                        name="description"
                        placeholder="Descrição da Categoria"
                        onChange={handleChange}
                    />
					<label>Categoria Principal</label>
                    <select
                        name="parent_category"
                        onChange={handleChange}
                        >
                        {(categoryParent || []).map((d) => (
                            <option value={d.id_category}>{d.name}</option>
                        ))}
                    </select>
				
					
					<button>Cadastrar</button>
				</Form>
			</ContainerPage>


            


		</>
	);
}