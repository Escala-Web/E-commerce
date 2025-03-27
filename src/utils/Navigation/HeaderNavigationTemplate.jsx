import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';

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
		title: "Layouts Disponives",
		icon: <DashboardIcon />,
	},
    {
		segment: "administrativo/templates/banner",
		title: "Banners",
		icon: <ViewCarouselIcon />,
	},
	
];