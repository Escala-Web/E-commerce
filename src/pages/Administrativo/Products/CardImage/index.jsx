import { useContext } from "react";
import { FileManagerContext } from "../../../../context/FileManager";
import { Container } from "./styles";
import { producion } from "../../../../utils/producion";
import { RiCloseCircleFill } from "react-icons/ri";

export const CardImage = ({image}) => {
	const { pictures, handleRemovePicture } = useContext(FileManagerContext);
	const url = producion(false);
	return (
		<Container>
			<div className="container_images">
				{pictures?.map((pic) => {
					const imagem = pic.file_path.split(".")[0];
					const extention = pic.name.split(".")[1];
					const urlImage = url + imagem + "." + extention;

					return (
						<>
							<div className="image">
								<img src={urlImage} alt="imagens selecionadas" />
								<RiCloseCircleFill onClick={() => handleRemovePicture(pic)} />
							</div>
						</>
					);
				})}
			</div>
		</Container>
	);
};
