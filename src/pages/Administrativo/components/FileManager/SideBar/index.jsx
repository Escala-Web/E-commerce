import { useEffect, useState } from "react";
import { Container } from "./styles";
import { http } from "../../../../../config/http";
import { FaFolderPlus, FaTrashRestore } from "react-icons/fa";

export const SideBar = ({ side }) => {
	const [foldersData, setFoldersData] = useState([]);
	const [search, setSearch] = useState("");

	async function findAllFolders() {
		try {
			const { data } = await http.get("/folder");
			setFoldersData(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		findAllFolders();
	}, []);

	return (
		<>
			<Container>
				<div>Caminhos das Pasta</div>
				<div>
					<input
						style={{ width: "24rem" }}
						type="text"
						value={search}
						onChange={(event) => setSearch(event.target.value)}
					/>
				</div>
				    {side === "lixeira" ? (
					    <div>
                            <FaTrashRestore size={32} color="red"/>
                        </div>
				    ) : (
					<>
						<div>
                            <FaFolderPlus size={32} color="rgb(80, 175, 245)"/>
                        </div>
					</>
				)}
			</Container>
		</>
	);
};
