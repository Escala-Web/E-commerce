import { useEffect, useState } from "react";
import { Container } from "./styles";
import { http } from "../../../../../config/http";
import { FaFolderPlus, FaTrashRestore } from "react-icons/fa";
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import { Delete, Folder, Pageview } from "@mui/icons-material";
import { useFileManager } from "../../../../../hooks/useFileManager";

export const SideBar = ({set}) => {

	return (
		<>
			<Container>
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
					<ListItemButton onClick={() => set('arquivo')}>
						<ListItemIcon>
							<Pageview />
						</ListItemIcon>
						<ListItemText primary="Arquivos" />
					</ListItemButton>

					<ListItemButton onClick={() => set('lixeira')}>
						<ListItemIcon>
							<Delete />
						</ListItemIcon>
						<ListItemText primary="Lixeira" />
					</ListItemButton>
				</List>
			</Container>
		</>
	);
};
