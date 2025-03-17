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
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CopyrightIcon from "@mui/icons-material/Copyright";
import CategoryIcon from "@mui/icons-material/Category";
import EmailIcon from "@mui/icons-material/Email";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { LogoTipo } from "../Logo";
import { headerNavigationAdm } from "../../utils/Navigation/HeaderNavigationAdm";
import { headerNavigationTemplate } from '../../utils/Navigation/HeaderNavigationTemplate'
import { AdministrativoThemes } from "../../pages/Administrativo/Template/pages/Themes";
import { LayoutsAdm } from "../../pages/Administrativo/Template/pages/Layouts";
import { useLocation, useNavigate } from "react-router-dom";


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
export const Header = (props) => {
	const { window } = props;
	const navigate = useNavigate();
	const location = useLocation();

	const pages = {
		"/administrativo": <Dashboard />,
		"/administrativo/pedidos": <Pedidos />,
		"/administrativo/loja": <LojaPage />,
		"/administrativo/produtos": <Products />,
		"/administrativo/produtos/create": <CreatePageProduct />,
		"/administrativo/templates": <LayoutsAdm />,
	};

	// Remove este const quando copiar para o seu projeto.
	const demoWindow = window ? window() : undefined;

	// Função para gerenciar a navegação
	const handleNavigation = (segment) => {
		const navItem = NAVIGATION.find((item) => item.segment === segment);

		if (navItem && navItem.onClick) {
			navItem.onClick();
		} else {
			navigate(`/${segment}`);
		}
	};

	const NAVIGATION = location.pathname.includes('template')
		? headerNavigationTemplate
		: headerNavigationAdm;

	return (
		<AppProvider
			navigation={NAVIGATION}
			router={{ pathname: location.pathname, navigate }}
			theme={demoTheme}
			window={demoWindow}
			onNavigate={handleNavigation}
			branding={{
				logo: "",
				title: <LogoTipo />,
				homeUrl: "/administrativo",
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
					{pages[location.pathname] || <div>Page not found</div>}
				</PageContainer>
			</DashboardLayout>
		</AppProvider>
	);
};