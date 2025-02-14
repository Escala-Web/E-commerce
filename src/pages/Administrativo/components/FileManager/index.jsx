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
import { FaFolderClosed, FaTrashCanArrowUp } from "react-icons/fa6";
import { TieredMenu } from 'primereact/tieredmenu';


export const FileManager = ({ name }) => {
	const [isOpenMenagerModal, setIsOpenManagerModal] = useState(false);

    const [newFolder, setNewFolder] = useState('');
    const [isActiveNewFolder, setIsActiveNewFolder] = useState(false);
    const [dataFolder, setDataFolder] = useState([]);

    const [headerFilter, setHeaderFilter] = useState('Adicionar Uploads');
    
    function toggleAddFolder() {
        setIsActiveNewFolder((prevActiveNewFolder) => !prevActiveNewFolder);
    }

	function toggleOpenModal() {
		setIsOpenManagerModal((prevModal) => !prevModal);
	}

    async function addFolder(direction) {
		if(direction === '') {
			return;
		}
        try {
            await http.post('/folder', {
                folder: direction,
				status: 0
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
										<li onClick={() => setHeaderFilter('Adicionar Uploads')}>Adicionar Uploads</li>
										<li onClick={() => setHeaderFilter('Lixeira')}>Lixeira</li>
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
											<p>{headerFilter === 'Lixeira' ? 'Lixeira' : 'Adicionar Uploads'}</p>
											<div>
											{headerFilter === 'Lixeira' ? (
												<FaTrashCanArrowUp onClick={toggleAddFolder} className="dirname-icon" color="#555" />
											) : (
												<FiFolderPlus onClick={toggleAddFolder} className="dirname-icon" color="#555" />
											)}
											</div>
										</div>

										{headerFilter === 'Lixeira' ? (
											<CardDir>
                                        {
											(dataFolder || []).filter((f) => f.status === 0)
											.map((data) => (
                                                <div className="card-add-folder">
													<FaFolderClosed className="add-folder-icon" />
													
                                                    <p>{data.folder}</p>
											    </div>
                                            ))
                                        }
											
                                        
                                            
										</CardDir>
										) : (
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
                                            (dataFolder || []).filter((f) => f.status === 1)
											.map((data) => (
                                                <div className="card-add-folder">
													<FaFolderClosed className="add-folder-icon" />
													<div className="setting-container">

													</div>
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
										) }

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
