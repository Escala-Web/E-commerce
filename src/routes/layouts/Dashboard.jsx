import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { ContainerContent, ContainerRouter } from "../style";

export const DashboardLayout = ({ children }) => {
  return (
    <ContainerRouter>
      <Header />
      <ContainerContent>
        <Outlet /> 
      </ContainerContent>
    </ContainerRouter>
  );
};
