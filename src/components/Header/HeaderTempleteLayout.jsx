import * as React from "react";
import { extendTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { LogoTipo } from "../Logo";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { AdministrativoThemes } from "../../pages/Administrativo/Template/pages/Themes";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ColorizeIcon from '@mui/icons-material/Colorize';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import ViewDayIcon from '@mui/icons-material/ViewDay';

const NAVIGATION = [
    {
		segment: "administrativo",
		title: "Voltar",
		icon: <KeyboardReturnIcon />,
        
	},
    {
		kind: "divider",
	},
	{
		kind: "header",
		title: "Dashboard",
	},
	{
		segment: "administrativo/template",
		title: "Temas disponiveis",
		icon: <ColorLensIcon />,
		children: [
			{
				segment: "loja",
				title: "Tema Azul",
				icon: <ColorizeIcon />,
			},
			{
				segment: "loja",
				title: "Tema Preto",
				icon: <ColorizeIcon />,
			},
			{
				segment: "loja",
				title: "Tema Vermelho",
				icon: <ColorizeIcon />,
			},
			{
				segment: "loja",
				title: "Tema Verde",
				icon: <ColorizeIcon />,
			},
			{
				segment: "loja",
				title: "Tema Roxo",
				icon: <ColorizeIcon />,
			},
			{
				segment: "loja",
				title: "Tema Laranja",
				icon: <ColorizeIcon />,
			},
		],
	},
    {
		segment: "administrativo/templat",
		title: "Logos",
		icon: <DashboardIcon />,
	},
    {
		segment: "administrativo/templat",
		title: "Banners",
		icon: <ViewCarouselIcon />,
		children: [
			{
				segment: "loja",
				title: "Meus Banner",
				icon: <ViewDayIcon />,
			},
			{
				segment: "loja",
				title: "Registrar Banner",
				icon: <ViewDayIcon />,
			},
		
		],
	},
];

const demoTheme = extendTheme({
	colorSchemes: { light: true, dark: true },
	colorSchemeSelector: "class",
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 600,
			lg: 1480,
			xl: 1636,
		},
	},
});

function useDemoRouter(initialPath) {
	const [pathname, setPathname] = React.useState(initialPath);

	const router = React.useMemo(() => {
		return {
			pathname,
			searchParams: new URLSearchParams(),
			navigate: (path) => {
				setPathname(path);
				window.history.pushState({}, "", path);
			},
		};
	}, [pathname]);

	return router;
}

export const HeaderTemplate = (props) => {
	const { window } = props;

	const router = useDemoRouter("/administrativo/template");

	if(router.pathname === '/administrativo') {
		window.location.href = '/administrativo'
	}

	const pages = {
		"/administrativo/templates": <AdministrativoThemes />,
	};

	const demoWindow = window ? window() : undefined;

	const handleNavigation = (segment) => {
		const navItem = NAVIGATION.find((item) => item.segment === segment);

		if (navItem && navItem.onClick) {
			navItem.onClick();
		} else {
			router.navigate(`/${segment}`);
		}
	};

	return (
		<AppProvider
			navigation={NAVIGATION}
			// router={router}
			theme={demoTheme}
			window={demoWindow}
			onNavigate={handleNavigation}
			branding={{
				logo: "",
				title: <LogoTipo />,
				homeUrl: "/administrativo/template",
			}}
		>
			<DashboardLayout
				sx={{
					position: "relative",
					zIndex: "99",
					"& .MuiDrawer-paper": {
						mt: 4,
						width: 280,
						padding: "10px",
					},
				}}
				disableCollapsibleSidebar={true}
			>
				<PageContainer sx={{ mt: 4 }}>
					{pages[router.pathname] || <div>Page not found</div>}
				</PageContainer>
			</DashboardLayout>
		</AppProvider>
	);
};
