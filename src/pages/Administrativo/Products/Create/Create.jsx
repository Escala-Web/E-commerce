import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Content } from "../../components/Content";
import { Form } from "../../components/Form";
import { Formulario } from "../../components/Formulario";
import {
	Aside,
	Container,
	MainContent,
	PriceDescont,
	PromocionDiscont,
} from "./styles";
import ReactQuill from "react-quill";
import { InputSwitch } from "primereact/inputswitch";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
import { Link } from "react-router-dom";
import { CreateCategoryPageAdm } from "../../Category/CreateCategory";
import { FileManager } from "../../components/FileManager";

export const CreatePageProduct = () => {
	const imagem =
		"https://static.vecteezy.com/ti/fotos-gratis/t2/6671698-fundo-azul-escuro-abstrato-com-bokeh-colorido-brilhante-luzes-bokeh-fundo-claro-foto.jpg";

	const [formProduct, setFormProduct] = useState({
		name: "",
		description: "",
		price: "",
		discount: "",
	});

	const [checked, setChecked] = useState(false);

	const modules = {
		toolbar: [
			[{ header: "1" }, { header: "2" }],
			[{ list: "ordered" }, { list: "bullet" }],
			[{ align: [] }],
			["bold", "italic", "underline"],
			["link", "image"],
		],
	};

	function Submit(event) {
		event.preventDefault();

		console.log(formProduct);
	}

	const valueTotalDiscont = formProduct.price - formProduct.discount;

	return (
		<>
			<Breadcrumb image={imagem} page="Registrar Produto" />
			<Container>
				<MainContent onSubmit={Submit}>
					<Content title="Imagens e vídeos">
						<Form>
							<FileManager name='Adicionar imagem'/>
						</Form>
					</Content>

					<Content title="Informações do produto">
						<Form>
							<label>Nome do produto</label>
							<input
								type="text"
								placeholder="Digite o nome do produto"
								name="name"
								value={formProduct.name}
								onChange={(e) =>
									setFormProduct({ ...formProduct, name: e.target.value })
								}
							/>
							<label htmlFor="description">Descrição do Produto:</label>
							<ReactQuill
								theme="snow"
								modules={modules}
								style={{ height: "100%", width: "100%" }}
								value={formProduct.description}
								onChange={(value) =>
									setFormProduct({ ...formProduct, description: value })
								}
							/>
						</Form>
					</Content>

					<Content title="Preços">
						<Form>
							<label>Preço</label>
							<input
								style={{ width: "30%" }}
								type="text"
								placeholder="Ex: R$ 20,00"
								name="price"
								value={formProduct.price}
								onChange={(e) =>
									setFormProduct({ ...formProduct, price: e.target.value })
								}
							/>
							<br />
							<PriceDescont>
								<InputSwitch
									checked={checked}
									onChange={(e) => setChecked(e.value)}
								/>
								<label>Promoção</label>
							</PriceDescont>

							{checked && (
								<>
									<PromocionDiscont>
										<div style={{ width: "30%" }}>
											<label>Desconto</label>
											<input
												type="text"
												name="discount"
												placeholder="Ex: 20% de desconto"
												value={formProduct.discount}
												onChange={(e) =>
													setFormProduct({
														...formProduct,
														discount: e.target.value,
													})
												}
											/>
										</div>
										<div style={{ width: "30%" }}>
											<label>Preço do desconto</label>
											<input
												type="text"
												className={valueTotalDiscont < 1 ? "error" : ""}
												value={valueTotalDiscont}
											/>
										</div>
									</PromocionDiscont>
								</>
							)}
						</Form>
					</Content>

					<div className="container-registrar">
						<button type="submit">Cadastrar</button>
						<Link className="cancelar">Cancelar</Link>
					</div>
				</MainContent>
				<Aside>
					<Content title="Categorias">
						<CreateCategoryPageAdm />
					</Content>
					<Content title="Seo da página">Seos</Content>
				</Aside>
			</Container>
		</>
	);
};
