import { useEffect, useState } from "react";
import {
    CardDir,
	Container,
	ContainerContent,
	ContainerManager,
	ContentFiles,
} from "./styles";
import { AiFillCloseSquare } from "react-icons/ai";
import { FaFolderOpen, FaPlus } from "react-icons/fa";
import { FiFolderPlus } from "react-icons/fi";
import { http } from "../../../../config/http";
import { toast } from "react-toastify";
import { FaFolderClosed } from "react-icons/fa6";

export const FileManager = ({ name }) => {
	const [isOpenMenagerModal, setIsOpenManagerModal] = useState(false);

    const [newFolder, setNewFolder] = useState('');
    const [isActiveNewFolder, setIsActiveNewFolder] = useState(false);
    const [dataFolder, setDataFolder] = useState([]);

    const [filterFolder, setFilterFolder] = useState();
    
    function toggleAddFolder() {
        setIsActiveNewFolder((prevActiveNewFolder) => !prevActiveNewFolder);
    }

	function toggleOpenModal() {
		setIsOpenManagerModal((prevModal) => !prevModal);
	}

    async function addFolder(direction) {
        try {
            await http.post('/folder', {
                folder: direction
            })
            setIsActiveNewFolder(false)
            setNewFolder('')
        } catch (error) {
            toast.error('Não foi possivel cadastrar pasta, tente novamente');
            
        }
    }

    async function findAllFolders() {
        try {
            const {data} = await http.get('/folder');
            setDataFolder(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        findAllFolders();
    }, [dataFolder])


	return (
		<>
			<Container>
				<div className="button-modal" onClick={toggleOpenModal}>
					{name}
				</div>
			</Container>

			{isOpenMenagerModal && (
				<>
					<ContainerManager>
						<div className="content-main">
							<div className="header">
								<h4>Gerenciador de midia</h4>
								<AiFillCloseSquare
									className="close_window"
									onClick={toggleOpenModal}
									color="red"
									size={40}
								/>
							</div>
							<ContainerContent>
								<div className="side-bar">
									<h3>Gerenciador</h3>
									<ul className="header-navegacao" onClick={(event) => console.log(event.target)}>
										<li>Adicionar Uploads</li>
										<li>Lixeira</li>
									</ul>

									<h3 className="pastas-title">Minhas pastas</h3>
									<ul className="header-navegacao">
                                        {(dataFolder || []).map((data) => (
                                            <li>{data.folder}</li>
                                        ))}
									</ul>
								</div>
								<ContentFiles>
									<div className="content-header">
										<div>
											<input type="search" />
										</div>
										<div className="content-filter">
											<p>Adicionar Uploads</p>
											<div>
												<FiFolderPlus onClick={toggleAddFolder} className="dirname-icon" color="#555" />
											</div>
										</div>

										<CardDir>

                                        {isActiveNewFolder  && 
                                            <div className="card-add-folder">
													<FaFolderOpen className="add-folder-icon" />
                                                    <input 
                                                        name="folder"
                                                        value={newFolder}
                                                        onChange={(event) => setNewFolder(event.target.value)}
                                                        onBlur={() => {
                                                            addFolder(newFolder); 
                                                        }}
                                                    />
											</div>
                                        }

                                        {
                                            (dataFolder || []).map((data) => (
                                                <div className="card-add-folder">
													<FaFolderClosed className="add-folder-icon" />
                                                    <p>{data.folder}</p>
											    </div>
                                            ))
                                        }
											
                                            <div className="card-add-upload">
												<div>
													<FaPlus className="add-upload-icon" />
												</div>
											</div>
                                            
										</CardDir>
									</div>
								</ContentFiles>
							</ContainerContent>
						</div>
					</ContainerManager>
				</>
			)}
		</>
	);
};
