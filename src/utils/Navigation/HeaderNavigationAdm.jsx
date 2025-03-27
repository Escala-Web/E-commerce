import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SellIcon from "@mui/icons-material/Sell";
import PersonIcon from "@mui/icons-material/Person";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import SettingsIcon from "@mui/icons-material/Settings";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import EmailIcon from "@mui/icons-material/Email";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export const headerNavigationAdm = [
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
		segment: "pagamentos",
		title: "Pagamentos",
		icon: <PriceChangeIcon />,
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
				title: "Registrar Produto",
				icon: <LabelImportantIcon />,
			},
			// {
			// 	segment: "brands",
			// 	title: "Marcas",
			// 	icon: <CopyrightIcon />,
			// 	children: [
			// 		{
			// 			segment: "produtos",
			// 			title: "Minhas Marcas",
			// 			icon: <CopyrightIcon />,
			// 		},
			// 		{
			// 			segment: "produtos",
			// 			title: "Registrar Marca",
			// 			icon: <CopyrightIcon />,
			// 		},
			// 	],
			// },
			// {
			// 	segment: "category",
			// 	title: "Categorias",
			// 	icon: <CategoryIcon />,
			// 	children: [
			// 		{
			// 			segment: "produtos",
			// 			title: "Minhas Categorias",
			// 			icon: <CategoryIcon />,
			// 		},
			// 		{
			// 			segment: "produtos",
			// 			title: "Registrar Categoria",
			// 			icon: <CategoryIcon />,
			// 		},
			// 	],
			// },
		],
	},
	{
		segment: "administrativo/pedidos",
		title: "Pedidos",
		icon: <ShoppingCartIcon />,
	},
	{
		segment: "administrativo/clientes",
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
				segment: "templates",
				title: "Templates",
				icon: <ViewQuiltIcon />,
			},
		],
	},
	{
		kind: "divider",
	},
	{
		kind: "header",
		title: "Configurações",
	},
	{
		segment: "produtos/create",
		title: "Configurações",
		icon: <SettingsIcon />,
		children: [
			{
				segment: "loja",
				title: "Integração de pagamento",
				icon: <AccountBalanceIcon />,
			},
			{
				segment: "loja",
				title: "Configuração de E-mail",
				icon: <EmailIcon />,
			},
		],
	},
];