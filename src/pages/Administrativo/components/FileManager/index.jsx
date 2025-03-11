import { useEffect, useState } from "react";
import { Container, ContainerModal } from "./styles";
import { http } from "../../../../config/http";
import { AiFillCloseSquare } from "react-icons/ai";
import { useFileManager } from "../../../../hooks/useFileManager";
import { Content } from "./Content";
import { SideBar } from "./SideBar";
import { Box, Modal, Typography } from "@mui/material";

export const FileManager = ({ name }) => {
	const [isOpenMenagerModal, setIsOpenManagerModal] = useState(false);
	const [isPageActive, setIsPageActive] = useState("arquivo");

	function toggleOpenModal() {
		setIsOpenManagerModal((prevModal) => !prevModal);
	}

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 1400,
		bgcolor: 'background.paper',
		border: '1px solid #ccc',
		boxShadow: 24,
		p: 4,
		height: '80vh'
	  };

	return (
		<>
			<Container>
				<div className="button-modal" onClick={toggleOpenModal}>
					{name}
				</div>
			</Container>

			{isOpenMenagerModal && (
				<>
					<Modal
						keepMounted
						open={isOpenMenagerModal}
						onClose={() => setIsOpenManagerModal(false)}
						aria-labelledby="keep-mounted-modal-title"
						aria-describedby="keep-mounted-modal-description"
					>
						<Box sx={style}>
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
											<SideBar set={setIsPageActive} />
										</div>
									</div>
									<div className="body">
										<Content isPage={isPageActive} />
									</div>
								</div>
								</div>
							</ContainerModal>
						</Box>
					</Modal>
				</>
			)}
		</>
	);
};
