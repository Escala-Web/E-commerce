import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";

// Importação dos componentes das páginas
import { Dashboard } from "../pages/Administrativo/Dashboard";
import { Pedidos } from "../pages/Administrativo/Pedidos";
import { LojaPage } from "../pages/Administrativo/Loja";
import { DashboardLayout } from "./layouts/Dashboard";
import { TemplateLayout } from "./layouts/TemplateLayout";
import { HomeEcommece } from "../pages/Ecommerce/Home";
import { LoginEcommece } from "../pages/Ecommerce/Login";
import { AdminPage } from "../pages/Ecommerce/Admin";
import { ConteudoTemplateAdministrador } from "../pages/Administrativo/Template/pages/Conteudo";
import { Products } from "../pages/Administrativo/Products";
import { CreatePageProduct } from "../pages/Administrativo/Products/Create";
import { SeoPageAdm } from "../pages/Administrativo/Seo";
import { CreatePageAdministrador } from "../pages/Administrativo/Template/pages/CreatePage";
import { useApi } from "../hooks/useApi";
import { Pesonalizar } from "../pages/Administrativo/Template/pages/Personaliza";
import { ResetPassword } from "../pages/templates/template01/pages/ResetPassword";
import { ResetPasswordAccess } from "../pages/templates/template01/pages/ResetPasswordAccess";

export const RoutesApp = () => {
	const { login } = useContext(AuthContext);
	const { items } = useApi("/pages");

	return (
		<BrowserRouter>
			<Routes>
				{login && (
					<>
						<Route path="/administrativo" element={<DashboardLayout />}>
							<Route index element={<Dashboard />} />
							<Route path="pedidos" element={<Pedidos />} />
							<Route path="loja" element={<LojaPage />} />
							<Route path="produtos" element={<Products />} />
							<Route path="produtos/create" element={<CreatePageProduct />} />
							<Route path="seo" element={<SeoPageAdm />} />
							<Route path=":theme/editor" element={<ConteudoTemplateAdministrador />}/>
							<Route path=":theme/editor/create-page" element={<CreatePageAdministrador /> } />
							<Route path=":theme/editor/personalizar/:page" element={<Pesonalizar /> } />
						</Route>
						<Route path="/admin">
							<Route index element={<AdminPage />} />
						</Route>
					</>
				)}
				<Route path="/" element={<TemplateLayout />}>
					<Route index element={<HomeEcommece />} />
					<Route path="login" element={<LoginEcommece />} />
					<Route path="esqueci-senha" element={<ResetPassword />} />
					<Route path="reset-password" element={<ResetPasswordAccess />} />
					<Route path="/administrativo" element={<Navigate to="/" />} />
					{items.map((p) => (
						<Route path={p.link} element={p.page} />
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
