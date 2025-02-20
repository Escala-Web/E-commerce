import { useEffect, useState } from "react";
import { Container, ContainerModal } from "./styles";
import { http } from "../../../../config/http";
import { AiFillCloseSquare } from "react-icons/ai";
import { useFileManager } from "../../../../hooks/useFileManager";
import { Folders } from "./Folders";
import { SideBar } from "./SideBar";

export const FileManager = ({ name }) => {
	const [isOpenMenagerModal, setIsOpenManagerModal] = useState(false);
	const [folders, setFolders] = useState([]);
	const [menu, setMenu] = useState("arquivos");

	const { createdFolderAndFiles } = useFileManager();

	function toggleOpenModal() {
		setIsOpenManagerModal((prevModal) => !prevModal);
	}

	const menuHeader = [
		{
			title: "Arquivos",
			page: "arquivos",
		},
		{
			title: "Lixeira",
			page: "lixeira",
		},
	];

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
								<h3>Gerenciador de Arquivos</h3>
								<div onClick={toggleOpenModal} style={{ cursor: "pointer" }}>
									<AiFillCloseSquare color="red" size={36} />
								</div>
							</div>
							<div className="container-modal">
								<div className="header">
									<div className="header-gerenciador">
										<h4>Gerenciador</h4>
										<ul className="navigation">
											{menuHeader?.map((menu, index) => (
												<li key={index} onClick={() => setMenu(menu.page)}>{menu.title}</li>
											))}
										</ul>
										
									</div>
								</div>
								<div className="body">
								
									{menu === "lixeira" ? (
										<Folders filter={0} side={menu}/>
									) : (
										<Folders filter={1} side={menu}/>
									)}
								</div>
							</div>
						</div>
					</ContainerModal>
				</>
			)}
		</>
	);
};
