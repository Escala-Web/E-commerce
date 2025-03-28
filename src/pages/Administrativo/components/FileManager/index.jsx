import { useEffect, useState } from "react";
import { Container, ContainerModal } from "./styles";
import { AiFillCloseSquare } from "react-icons/ai";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Modal, Typography } from "@mui/material";
import { Content } from "./Content";
import { Delete, Pageview } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { BodyContent } from "./Ui/Body";

export const FileManager = ({ name }) => {
	const [isOpenMenagerModal, setIsOpenManagerModal] = useState(false);
	const [isPageActive, setIsPageActive] = useState("arquivo");

	function toggleOpenModal() {
		setIsOpenManagerModal((prevModal) => !prevModal);
	}

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 1500,
		bgcolor: "background.paper",
		border: "1px solid #ccc",
		boxShadow: 24,
		p: 4,
		height: "80vh",
		overflow: "auto", // Adiciona o scroll ao conteúdo
	};

	return (
		<>
			<Container>
				<div className="button-modal" onClick={toggleOpenModal}>
					{name}
				</div>
			</Container>

			{/* Modal */}
			{isOpenMenagerModal && (
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
											<List
												sx={{
													width: "100%",
													maxWidth: 360,
													bgcolor: "background.paper",
													height: "90%",
												}}
												component="nav"
												aria-labelledby="nested-list-subheader"
												subheader={
													<ListSubheader
														component="div"
														id="nested-list-subheader"
														className="container-title"
													>
														<Typography component="span" variant="h6">
															Gerenciador
														</Typography>
													</ListSubheader>
												}
											>
												<ListItemButton
													component={Link}
													to="/administrativo/produtos/create?arquivo=0"
												>
													<ListItemIcon>
														<Pageview />
													</ListItemIcon>
													<ListItemText primary="Arquivos" />
												</ListItemButton>

												<ListItemButton
													component={Link}
													to="/administrativo/produtos/create?arquivo=1"
												>
													<ListItemIcon>
														<Delete />
													</ListItemIcon>
													<ListItemText primary="Lixeira" />
												</ListItemButton>
											</List>
										</div>
									</div>
									<div className="body">
										<BodyContent isPage={isPageActive} />
									</div>
								</div>
							</div>
						</ContainerModal>
					</Box>
				</Modal>
			)}
		</>
	);
};
