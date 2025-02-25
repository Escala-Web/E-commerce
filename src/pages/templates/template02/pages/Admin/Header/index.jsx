
import { HeaderPageTemplate02 } from "../../../components/Header";
import { Container } from "../../home/styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../../../context/Auth";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Avatar, Typography } from "@mui/material";
import { ContainerContent } from "./styles";
import { deepOrange } from "@mui/material/colors";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export const HeaderAdmimTemplate02 = ({ children }) => {
	const { login, logout } = useContext(AuthContext);

	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<>
			
			<Container>
			<ContainerContent>

				<List
					sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", height: '90%'}}
					component="nav"
					aria-labelledby="nested-list-subheader"
					subheader={
						<ListSubheader component="div" id="nested-list-subheader" className="container-avatar">
							<Avatar>{login[0].user[0]}</Avatar>
							<Typography component='span' variant="h6">{login[0].user}</Typography>
						</ListSubheader>
					}
				>
					<ListItemButton>
						<ListItemIcon>
							<SendIcon />
						</ListItemIcon>
						<ListItemText primary="Minha Pedidos" />
					</ListItemButton>
					<ListItemButton>
						<ListItemIcon>
							<DraftsIcon />
						</ListItemIcon>
						<ListItemText primary="Favoritos" />
					</ListItemButton>
					<ListItemButton onClick={handleClick}>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Inbox" />
						{open ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 4 }}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText primary="Starred" />
							</ListItemButton>
						</List>
					</Collapse>
					<ListItemButton onClick={logout}>
						<ListItemIcon>
							<ExitToAppIcon />
						</ListItemIcon>
						<ListItemText primary="Sair" />
					</ListItemButton>
				</List>
				{children}
			</ContainerContent>
			</Container>
		</>
	);
};
