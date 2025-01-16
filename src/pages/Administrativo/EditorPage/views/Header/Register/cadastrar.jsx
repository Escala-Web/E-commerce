import { useState } from "react";
import { useApi } from "../../../../../../hooks/useApi";
import { toast } from "react-toastify";
import { ContainerStyle, Form } from "../../../pages/Header/styles";
import { Formulario } from "../../../components/Formulario";

export const CadastrarMenu = () => {

	const { items, loading, create } = useApi("/menu");
	const [linkMenu, setLinkMenu] = useState({
		name: "",
		link: "",
	});

	async function addLinkToHeaderr(event) {
		event.preventDefault();

		create({
			name: linkMenu.name,
			link: linkMenu.link,
		});

		setLinkMenu({
			name: "",
			link: "",
		});

		toast.warning("Menu registrado com sucesso");
	}

	function handleLink(event) {
		const { name, value } = event.target;

		setLinkMenu((prevLink) => ({
			...prevLink,
			[name]: value,
		}));
	}

	return (
		<>
			<ContainerStyle>
				<Formulario title="Adicionar menu">
					<Form>
						<h3>Adicionar menu</h3>
						<input
							placeholder="Nome do link"
							onChange={handleLink}
							name="name"
						/>
						<input placeholder="Link" name="link" onChange={handleLink} />
						<button onClick={addLinkToHeaderr}>Adicionar +</button>
					</Form>
				</Formulario>
			</ContainerStyle>
		</>
	);
};
