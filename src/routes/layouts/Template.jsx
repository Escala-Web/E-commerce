import { Helmet } from "react-helmet-async";
import { ContainerRouter } from "../style";
import { HeaderTemplate } from "../../components/Header/HeaderTempleteLayout";
import { Outlet } from "react-router-dom";

export const TemplateHeaderLayout = () => {
	return (
		<ContainerRouter>
			<Helmet>
				<title>Templates | E-commerce</title>
				<link
					rel="icon"
					type="image"
					href="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
				/>
			</Helmet>

			<HeaderTemplate>
				<Outlet />
			</HeaderTemplate>
		</ContainerRouter>
	);
};
