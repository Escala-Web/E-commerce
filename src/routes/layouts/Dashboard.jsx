import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { ContainerRouter } from "../style";
import { Helmet } from "react-helmet-async";

export const DashboardLayout = () => {
  return (
    <ContainerRouter>

      <Helmet>  
        <title>Sistema administrativo | E-commerce</title>
        <link rel="icon" type="image" href="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png" />
      </Helmet>

      <Header>
        <Outlet />
      </Header>
    </ContainerRouter>
  );
};
