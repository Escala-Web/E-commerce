import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ColorLensIcon from '@mui/icons-material/ColorLens';

export const headerNavigationTemplate = [
	{
		kind: "header",
		title: "Meu Template",
	},
    {
		segment: "administrativo",
		title: "Voltar",
		icon: <ArrowCircleLeftIcon />,
	},
    {
        kind: "divider",
    },
	{
		segment: "administrativo/templates",
		title: "Temas Disponives",
		icon: <DashboardIcon />,
	},
    {
		segment: "administrativo/templat",
		title: "Paletas de Cores",
		icon: <ColorLensIcon />,
	},
	
];