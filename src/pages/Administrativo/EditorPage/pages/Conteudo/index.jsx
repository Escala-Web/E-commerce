import { useContext, useState } from "react";
import { ContainerContentEditor } from "../../styles";
import { useParams, useSearchParams } from "react-router-dom";
import { Formulario } from "../../components/Formulario";
import { CardSection } from "../../../../../components/CardSection";
import { Title } from "../../../../../components/Title";
import { TemplateContext } from "../../../../../context/Template";
import { HeaderPage } from "../../components/HeaderPage";
import { Form, SectionPageStyle } from "./styles";
import { Banners } from "../../components/Banners";
import { LinkButton } from "../../components/LinkButton";

export const ConteudoEditorPage = () => {
	const { theme } = useParams();
	const { banner, setBanner } = useContext(TemplateContext);
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");

	const [searchBanner, setSearchBanner] = useSearchParams();

  	const idBanner = searchBanner.get('banner');


	function addSubmitBanner(event) {
		event.preventDefault();
		setBanner((prevBanners) => [
			...prevBanners,{ 
				id: idBanner,
				title,
				image,
			},
		]);
	}

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
		  const reader = new FileReader();
		  
		  reader.onloadend = () => {
			setImage(reader.result);
		  };
		  
		  reader.readAsDataURL(file);
		} else {
		  console.error("Nenhum arquivo selecionado");
		}
	  };

	console.log(banner);

	return (
		<>
			<div>
				<ContainerContentEditor>
					<CardSection w="100%">
						<Title>Thema {theme} - Conteudo</Title>
					</CardSection>
					<CardSection w="100%" h="70vh" scroll={"scroll"}>
						<HeaderPage />
						<Banners />
					</CardSection>

					<CardSection w="100%">
						<Title>Configuração do conteudo</Title>

						<SectionPageStyle display="row">
							<LinkButton link="?banner=1">Banner 1</LinkButton>
							<LinkButton link="?banner=2">Banner 2</LinkButton>
							<LinkButton link="?banner=3">Banner 3</LinkButton>
						</SectionPageStyle>

						<SectionPageStyle w="100%" m="4rem 0 2rem">
							<Formulario
								w="60%"
								submit={addSubmitBanner}
								enctype="multipart/form-data"
							>
								<Title fontSize="18px">
									<p>Adicionar Banner</p>
								</Title>

								<input
									type="text"
									placeholder="Titulo*"
									onChange={handleTitleChange}
									value={title}
								/>
								<input
									type="file"
									accept="image/*" // Somente imagens
									onChange={handleImageChange}
									// value={image}
								/>
								<button type="submit">Cadastrar</button>
							</Formulario>
						</SectionPageStyle>
					</CardSection>
				</ContainerContentEditor>
			</div>
		</>
	);
};
