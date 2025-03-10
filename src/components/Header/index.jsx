import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import { Dashboard } from "../../pages/Administrativo/Dashboard";
import { Pedidos } from "../../pages/Administrativo/Pedidos";
import { LojaPage } from "../../pages/Administrativo/Loja";
import StoreIcon from "@mui/icons-material/Store";
import { Products } from "../../pages/Administrativo/Products";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SellIcon from "@mui/icons-material/Sell";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { CreatePageProduct } from "../../pages/Administrativo/Products/Create/Create";
import PersonIcon from "@mui/icons-material/Person";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Button } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { ContainerHeader } from "./styles";
import { HomeEcommece } from "../../pages/Ecommerce/pages/Home";

const NAVIGATION = [
	{
		kind: "header",
		title: "Dashboard",
	},
	{
		segment: "administrativo",
		title: "Dashboard",
		icon: <DashboardIcon />,
	},
	{
		segment: "administrativo",
		title: "Produtos",
		icon: <SellIcon />,
		children: [
			{
				segment: "produtos",
				title: "Meus Produtos",
				icon: <LabelImportantIcon />,
			},
			{
				segment: "produtos/create",
				title: "Registrar Produtos",
				icon: <AddBoxIcon />,
			},
		],
	},
	{
		segment: "administrativo/pedidos",
		title: "Pedidos",
		icon: <ShoppingCartIcon />,
	},
	{
		segment: "administrativo/pedidos",
		title: "Clientes",
		icon: <PersonIcon />,
	},
	{
		kind: "divider",
	},
  {
		kind: "header",
		title: "Minha Loja",
	},
	{
		segment: "administrativo",
		title: "Loja Virtual",
		icon: <StoreIcon />,
		children: [
			{
				segment: "loja",
				title: "Templates",
				icon: <ViewQuiltIcon />,
			},
			{
				segment: "produtos/create",
				title: "Configurações",
				icon: <SettingsIcon />,
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

	// O router agora também manipula a URL do navegador.
	const router = React.useMemo(() => {
		return {
			pathname,
			searchParams: new URLSearchParams(),
			navigate: (path) => {
				setPathname(path); // Atualiza o estado do pathname

				// Atualiza a URL do navegador
				window.history.pushState({}, "", path);
			},
		};
	}, [pathname]);

	return router;
}

export const Header = (props, { children }) => {
	const { window } = props;

	const router = useDemoRouter("/administrativo");

	const pages = {
		"/administrativo": <Dashboard />,
		"/administrativo/pedidos": <Pedidos />,
		"/administrativo/loja": <LojaPage />,
		"/administrativo/produtos": <Products />,
		"/administrativo/produtos/create": <CreatePageProduct />,
	};

	// Remove este const quando copiar para o seu projeto.
	const demoWindow = window ? window() : undefined;

	// Função para gerenciar a navegação
	const handleNavigation = (segment) => {
		// Verifica se o segmento é o "logout" e chama a função onClick
		const navItem = NAVIGATION.find(item => item.segment === segment);

		if (navItem && navItem.onClick) {
			navItem.onClick(); 
		} else {
			router.navigate(`/${segment}`); // Navega normalmente para os outros segmentos
		}
	};

	return (
		<AppProvider
			navigation={NAVIGATION}
			router={router}
			theme={demoTheme}
			window={demoWindow}
			onNavigate={handleNavigation}
		>
			<DashboardLayout sx={{ position: "relative", zIndex: "99" }}>
				<PageContainer>
					{pages[router.pathname] || <div>Page not found</div>}
				</PageContainer>
			</DashboardLayout>
		</AppProvider>
	);
};
