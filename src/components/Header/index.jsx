import * as React from "react";
import { extendTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Dashboard } from "../../pages/Administrativo/Dashboard";
import { Pedidos } from "../../pages/Administrativo/Pedidos";
import { LojaPage } from "../../pages/Administrativo/Loja";
import { Products } from "../../pages/Administrativo/Products";
import { CreatePageProduct } from "../../pages/Administrativo/Products/Create/Create";
import { LogoTipo } from "../Logo";
import { headerNavigationAdm } from "../../utils/Navigation/HeaderNavigationAdm";
import { headerNavigationTemplate } from '../../utils/Navigation/HeaderNavigationTemplate'
import { LayoutsAdm } from "../../pages/Administrativo/Template/pages/Layouts";
import { useLocation, useNavigate } from "react-router-dom";
import { ClientAdm } from "../../pages/Administrativo/Clients";
import { BannerAdm } from "../../pages/Administrativo/Template/pages/Banner";


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
		"/administrativo/clientes": <ClientAdm />,

		"/administrativo/templates": <LayoutsAdm />,
		"/administrativo/templates/banner": <BannerAdm />,
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