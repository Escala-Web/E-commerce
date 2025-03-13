import { useEffect, useState } from "react";
import { Container } from "./styles";
import { http } from "../../../../../config/http";
import { FaFolderPlus, FaTrashRestore } from "react-icons/fa";
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import { Delete, Folder, Pageview } from "@mui/icons-material";
import { useFileManager } from "../../../../../hooks/useFileManager";
import { Link } from "react-router-dom";

export const SideBar = () => {

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
					<ListItemButton component={Link} to='/administrativo/produtos/create?arquivo=0'>
						<ListItemIcon>
							<Pageview />
						</ListItemIcon>
						<ListItemText primary="Arquivos" />
					</ListItemButton>

					<ListItemButton component={Link} to='/administrativo/produtos/create?arquivo=1'>
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
