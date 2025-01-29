import { useNavigate } from "react-router-dom";
import { Formulario } from "../components/Formulario";
import { ContainerPage } from "../components/Section";
import { HeaderTemplateEditor } from "../Template/components/Header";
import { ButtonTemplate } from "../Template/components/Button";
import { Form } from "../components/Form";
import { useState } from "react";
import {
	ContainerSpan,
	ContainerVariant,
	ContainerVariantForm,
	ContainerVariantImages,
} from "./createStyles";
import { BannerProduct } from "../components/BannerProducts";

export const CreatePageProduct = () => {
	const navigate = useNavigate();
	const goCreateProduct = () => navigate("/administrativo/produtos/create");
	const goAllProduct = () => navigate("/administrativo/produtos");

	const [isVariant, setIsVariant] = useState(false);

	const [products, setProducts] = useState([]);
	const [productImages, setProductImages] = useState([]);

	const handleFileChange = (event) => {
		const files = event.target.files;
		const fileArray = Array.from(files); // Converte FileList para array
		setProductImages((prevImages) => [...prevImages, ...fileArray]); // Adiciona arquivos ao estado, unindo com o array anterior
	  };
	  


	function submitProduct(event) {}

	function handleProduct() {}

	return (
		<>
			<HeaderTemplateEditor>
				<ButtonTemplate click={goAllProduct}>Meus Produtos</ButtonTemplate>
				<ButtonTemplate click={goCreateProduct}>Cadastrar</ButtonTemplate>
			</HeaderTemplateEditor>
			<ContainerPage>
				<Form name="Cadastre um Produto">
					<label>Nome do produto</label>
					<input placeholder="Nome*" />

					<label>Categoria</label>
					<select>
						<option>Categoria</option>
						<option>Eletromestico</option>
						<option>Roupas</option>
					</select>
					<label>Imagem principal</label>
					<input type="file" />
					{isVariant ? (
						<>
							<label>Preço</label>
							<input placeholder="Preço*" />
							<label>Marca</label>
							<input placeholder="Marca*" />
							<label>Quantidade</label>
							<input placeholder="Quantidade*" />
							<label>Codigo do produto</label>
							<input placeholder="Cod. Produto" />

							<ContainerSpan
								className={isVariant ? "" : "active"}
								onClick={() => setIsVariant((prevIs) => !prevIs)}
							>
								<span>Informações</span>
							</ContainerSpan>
						</>
					) : (
						<>
							<ContainerSpan
								className={isVariant ? "" : "active"}
								onClick={() => setIsVariant((prevIs) => !prevIs)}
							>
								<span>Varieante</span>
							</ContainerSpan>
							<ContainerVariant>
								<ContainerVariantForm>
									<label>Cor</label>
									<input placeholder="Cor" />
									<label>Tamanho</label>
									<input placeholder="Tamanho" />
									<label>Preço</label>
									<input placeholder="Preço" />
									<label>Quantidade</label>
									<input placeholder="Quantidade" />
									<label>Codigo do produto</label>
									<input placeholder="Cod. Produto" />
								</ContainerVariantForm>
								<ContainerVariantImages>
									<label>Imagens do produto</label>

									<input
										multiple
										type="file"
										name="images[]"
										onChange={handleFileChange}
										accept="image/*"
									/>

									<BannerProduct data={productImages}/>
								</ContainerVariantImages>
							</ContainerVariant>
						</>
					)}

					<button>Cadastrar</button>
				</Form>
			</ContainerPage>
		</>
	);
};
