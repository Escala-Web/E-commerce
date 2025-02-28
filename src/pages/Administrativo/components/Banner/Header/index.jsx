import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Container } from "./styles";
export const HeaderBanner = ({ setBannerMenu }) => {



	return  (
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
								Banners
							</Typography>
						</ListSubheader>
					}
				>
					<ListItemButton onClick={() => setBannerMenu(1)}>
						<ListItemIcon>
							<SendIcon />
						</ListItemIcon>
						<ListItemText primary="Meus banners"/>
					</ListItemButton>

					<ListItemButton onClick={() => setBannerMenu(2)}>
						<ListItemIcon>
							<SendIcon />
						</ListItemIcon>
						<ListItemText primary="Criar um Banner" />
					</ListItemButton>
				</List>
			</Container>
		</>
	);
};
