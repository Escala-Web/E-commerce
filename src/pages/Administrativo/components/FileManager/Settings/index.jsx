import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentPaste from "@mui/icons-material/ContentPaste";
import { Delete } from "@mui/icons-material";
import { Container } from "./styles";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	TextField,
} from "@mui/material";
import { FaFolderOpen } from "react-icons/fa";
import { useRenameFolder } from "../../../../../hooks/FileManager/Folder/useRenameFolder";
import { useMoveTrashFolder } from "../../../../../hooks/FileManager/Folder/useTrashFolder";
import { useRestoreTrashFolder } from "../../../../../hooks/FileManager/Folder/useRestoreTrashFolder";
import { useDeleteFolder } from "../../../../../hooks/FileManager/Folder/useDeleteFolder";

export const Settings = ({ folder, setClick, isPage }) => {
	const [isOpenModalRename, setIsOpenModalRename] = useState(false);
	const [rename, setRename] = useState("");

	const { mutate: newFolder, data } = useRenameFolder();
	const { mutate: moveTrash, data: trash } = useMoveTrashFolder();
	const { mutate: restoreTrash } = useRestoreTrashFolder();
	const { mutate: deleteFolder } = useDeleteFolder();

	function toggleMoveTrash() {
		moveTrash({
			id: folder.id,
		});
		setClick()
	}

	function toggleRestore() {
		restoreTrash({
			id: folder.id
		})
		setClick()
	}

	function toggleDelete() {
		deleteFolder({
			id: folder.id
		})
		setClick();
	}

	return (
		<>
			<Container>
				<Paper sx={{ width: 320, maxWidth: "100%" }}>
					<MenuList>
						<MenuItem>
							<ListItemIcon>
								<DriveFileMoveIcon fontSize="small" />
							</ListItemIcon>
							<ListItemText>Mover para....</ListItemText>
							<Typography variant="body2" sx={{ color: "text.secondary" }}>
								⌘
							</Typography>
						</MenuItem>

						<MenuItem onClick={() => setIsOpenModalRename(true)}>
							<ListItemIcon>
								<ContentPaste fontSize="small" />
							</ListItemIcon>
							<ListItemText>Renomear</ListItemText>
							<Typography variant="body2" sx={{ color: "text.secondary" }}>
								⌘
							</Typography>
						</MenuItem>
						{isPage === "arquivo" ? (
							<MenuItem onClick={toggleMoveTrash}>
								<ListItemIcon>
									<Delete fontSize="small" />
								</ListItemIcon>
								<ListItemText>Mover para lixeira</ListItemText>
								<Typography variant="body2" sx={{ color: "text.secondary" }}>
									⌘
								</Typography>
							</MenuItem>
						) : (
							<>
								<Divider />
								<MenuItem onClick={toggleRestore}>
									<ListItemIcon>
										<Delete fontSize="small" />
									</ListItemIcon>
									<ListItemText>Restarar</ListItemText>
									<Typography variant="body2" sx={{ color: "text.secondary" }}>
										⌘
									</Typography>
								</MenuItem>
								<MenuItem onClick={toggleDelete}>
									<ListItemIcon>
										<Delete fontSize="small" />
									</ListItemIcon>
									<ListItemText>Exluir permanentemente</ListItemText>
									<Typography variant="body2" sx={{ color: "text.secondary" }}>
										⌘
									</Typography>
								</MenuItem>
							</>
						)}
					</MenuList>
				</Paper>
			</Container>

			<Dialog
				open={isOpenModalRename}
				onClose={() => setIsOpenModalRename(false)}
				slotProps={{
					paper: {
						component: "form",
						onSubmit: (event) => {
							event.preventDefault();
							// const form = new FormData(event.currentTarget)
							newFolder({
								id: folder.id,
								name: rename,
							});
							setClick();
						},
					},
				}}
			>
				<DialogTitle>Renomear Pasta</DialogTitle>
				<DialogContent>
					<DialogContentText sx={{ textAlign: "center" }}>
						<FaFolderOpen size={100} />
					</DialogContentText>
					<TextField
						autoFocus
						required
						margin="dense"
						id="rename"
						name="rename"
						label="Novo nome da pasta"
						type="text"
						fullWidth
						variant="standard"
						value={rename}
						onChange={(e) => setRename(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button type="submit" onKeyDown={setClick}>
						Renomear
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
