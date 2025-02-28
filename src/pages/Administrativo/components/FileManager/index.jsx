import { useEffect, useState } from "react";
import { Container, ContainerModal } from "./styles";
import { http } from "../../../../config/http";
import { AiFillCloseSquare } from "react-icons/ai";
import { useFileManager } from "../../../../hooks/useFileManager";
import { Content } from "./Content";
import { SideBar } from "./SideBar";
import { Typography } from "@mui/material";

export const FileManager = ({ name }) => {
	
	const [isOpenMenagerModal, setIsOpenManagerModal] = useState(false);

	const [isPageActive, setIsPageActive] = useState('arquivo')
	

	function toggleOpenModal() {
		setIsOpenManagerModal((prevModal) => !prevModal);
	}


	return (
		<>
			<Container>
				<div className="button-modal" onClick={toggleOpenModal}>
					{name}
				</div>
			</Container>

			{isOpenMenagerModal && (
				<>
					<ContainerModal>
						<div className="content">
							<div className="header-top">
								<Typography component="span" variant="h5" fontWeight="400">
									Gerenciador de Arquivos
								</Typography>
								<div onClick={toggleOpenModal} style={{ cursor: "pointer" }}>
									<AiFillCloseSquare color="red" size={36} />
								</div>
							</div>
							<div className="container-modal">
								<div className="header">
									<div className="header-gerenciador">
										<SideBar set={setIsPageActive}/>
									</div>
								</div>
								<div className="body">
									<Content isPage={isPageActive}/>
								</div>
							</div>
						</div>
					</ContainerModal>
				</>
			)}
		</>
	);
};
