import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import DiscountIcon from '@mui/icons-material/Discount';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const navigationSite = [
    {
        name: 'Página Inicial',
        link: '/',
        icon: <HomeIcon />
    },
    {
        name: 'Departamentos',
        link: '/',
        icon: <MenuIcon />
    },
    {
        name: 'Marcas',
        icon: <DiscountIcon />
    },
    {
        name: 'Lançamentos',
        link: '/produtos',
        icon: <Inventory2Icon />
    },
    {
        name: 'Suporte',
        link: '/contato',
        icon: <RecentActorsIcon />
    },
];

export const navigationSiteAdm = [
    {
        name: 'Minha Conta',
        link: '/custumer/meus-pedidos',
        icon: <HomeIcon />
    },
    {
        name: 'Meus Pedidos',
        link: '/custumer/meus-pedidos',
        icon: <ShoppingBagIcon />
    }
]