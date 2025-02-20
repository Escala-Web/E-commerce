import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";

// Importação dos componentes das páginas
import { Dashboard } from "../pages/Administrativo/Dashboard";
import { Pedidos } from "../pages/Administrativo/Pedidos";
import { LojaPage } from "../pages/Administrativo/Loja";
import { DashboardLayout } from "./layouts/Dashboard";
import { TemplateLayout } from "./layouts/TemplateLayout";
import { ConteudoTemplateAdministrador } from "../pages/Administrativo/Template/pages/Conteudo";
import { Products } from "../pages/Administrativo/Products";

import { SeoPageAdm } from "../pages/Administrativo/Seo";
import { CreatePageAdministrador } from "../pages/Administrativo/Template/pages/CreatePage";
import { useApi } from "../hooks/useApi";
import { Pesonalizar } from "../pages/Administrativo/Template/pages/Personaliza";
import { ResetPassword } from "../pages/templates/template01/pages/ResetPassword";
import { ResetPasswordAccess } from "../pages/templates/template01/pages/ResetPasswordAccess";
import { HomeEcommece } from "../pages/Ecommerce/pages/Home";
import { LoginEcommece } from "../pages/Ecommerce/pages/Login";
import { AdminPage } from "../pages/Ecommerce/pages/Admin";
import { ActiveAccountPage } from "../pages/Ecommerce/pages/ActiveAccount";
import { Seo } from "../core/seo";
import { CategoryPageAdm } from "../pages/Administrativo/Category";
import { CreateCategoryPageAdm } from "../pages/Administrativo/Category/CreateCategory";
import { useCategory } from "../hooks/useCategory";
import { CartPage } from "../pages/Ecommerce/pages/Cart";
import { RegisterEcommerce } from "../pages/Ecommerce/pages/Register/RegisterEcommerce";
import { CreatePageProduct } from "../pages/Administrativo/Products/Create/Create";
import { OrdersTemplates02 } from "../pages/templates/template02/pages/Admin/Orders";

export const RoutesApp = () => {
	const { login } = useContext(AuthContext);
	const { items } = useApi("/pages");

	const { category } = useCategory();

	return (
		<BrowserRouter>
			<Seo />
			<Routes>
				{login && (
					<>
						<Route path="/administrativo" element={<DashboardLayout />}>
							<Route index element={<Dashboard />} />
							<Route path="pedidos" element={<Pedidos />} />
							<Route path="loja" element={<LojaPage />} />
							<Route path="produtos" element={<Products />} />
							<Route path="categoria" element={<CategoryPageAdm />} />
							<Route
								path="categoria/create"
								element={<CreateCategoryPageAdm />}
							/>
							<Route path="produtos/create" element={<CreatePageProduct />} />
							<Route path="seo" element={<SeoPageAdm />} />
							<Route
								path=":theme/editor"
								element={<ConteudoTemplateAdministrador />}
							/>
							<Route
								path=":theme/editor/create-page"
								element={<CreatePageAdministrador />}
							/>
							<Route
								path=":theme/editor/personalizar/:page"
								element={<Pesonalizar />}
							/>
						</Route>
						<Route path="/admin">
							<Route index element={<AdminPage />} />
						</Route>
					</>
				)}

				<Route path="/" element={<TemplateLayout />}>
					<Route index element={<HomeEcommece />} />
					<Route path="login" element={<LoginEcommece user="user" />} />
					<Route
						path="administrativo/login"
						element={<LoginEcommece user="admin" />}
					/>
					<Route path="registrar" element={<RegisterEcommerce />} />
					<Route path="esqueci-senha" element={<ResetPassword />} />
					<Route path="carrinho" element={<CartPage />} />
					<Route path="reset-password" element={<ResetPasswordAccess />} />
					<Route path="active-account" element={<ActiveAccountPage />} />
					<Route path="/administrativo" element={<Navigate to="/" />} />
					{items.map((p) => (
						<Route path={p.link} element={p.page} />
					))}

					{/* <Route path=":category" element={<CategoriesPage />}/> */}
				</Route>

				{login && login[0] && login[0].rule === "USER" && (
					<Route path="/custumer" element={<TemplateLayout />}>
						<Route index element={<AdminPage />} />
						<Route path="meus-pedidos" element={<OrdersTemplates02 />}/>
					</Route>
				)}
			</Routes>
		</BrowserRouter>
	);
};
