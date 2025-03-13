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
import { useMoveTrashFile } from "../../../../../hooks/FileManager/Files/useTrashFile";
import { useRestoreTrashFile } from "../../../../../hooks/FileManager/Files/useRestoreTrashFile";
import { useRenameFiles } from "../../../../../hooks/FileManager/Files/useRenameFile";
import { useDeleteFile } from "../../../../../hooks/FileManager/Files/useDeleteFile";
import zIndex from "@mui/material/styles/zIndex";

export const Settings = ({ folder, setOpenSettingsIndex, isPage }) => {
	const [isOpenModalRename, setIsOpenModalRename] = useState(false);
	const [rename, setRename] = useState("");

	const { mutate: newFolder, data } = useRenameFolder();
	const { mutate: moveTrash, data: trash } = useMoveTrashFolder();
	const { mutate: restoreTrash } = useRestoreTrashFolder();
	const { mutate: deleteFolder } = useDeleteFolder();

	const { mutate: deleteFile } = useMoveTrashFile();
	const { mutate: moveTrashFile } = useRestoreTrashFile();
	const { mutate: renameFile } = useRenameFiles();
	const { mutate: deleteFileP } = useDeleteFile();

	console.log(folder)

	function toggleMoveTrash() {
		if (folder.type == "file") {
			deleteFile({
				id: folder.id,
			});
		} else {
			moveTrash({
				id: folder.id,
			});
		}
		setOpenSettingsIndex(null);
	}

	function toggleRestore() {
		if (folder.type == "file") {
			moveTrashFile({
				id: folder.id,
			});
		} else {
			restoreTrash({
				id: folder.id,
			});
		}
		setOpenSettingsIndex(null);

	}

	function toggleDelete() {
		if (folder.type == "file") {
			deleteFileP({
				id: folder.id,
			});
		} else {
			deleteFolder({
				id: folder.id,
			});
		}
		setOpenSettingsIndex(null);

	}

	return (
		<>
			<Container>
				<Paper sx={{ width: 320, maxWidth: "100%", zIndex: '999999999999999' }}>
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
						{isPage !== "lixeira" ? (
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

							if (folder.type === "folder") {
								newFolder({
									id: folder.id,
									name: rename,
								});
							}else {
								renameFile({
									id: folder.id,
									name: rename,
								});
							};

							setOpenSettingsIndex();
						},
					},
				}}
			>
				<DialogTitle>Renomear {folder.type == 'file' ? 'Arquivo' : 'Pasta'}</DialogTitle>
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
					<Button type="submit" onKeyDown={setOpenSettingsIndex}>
						Renomear
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
