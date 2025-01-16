import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContainerContent, ContainerRouter } from "./style";
import { Header } from "../components/Header";
import { Dashboard } from "../pages/Administrativo/Dashboard";
import { Pedidos } from "../pages/Administrativo/Pedidos";
import { LojaPage } from "../pages/Administrativo/Loja";
import { HeaderEditorPage } from "../pages/Administrativo/EditorPage/pages/Header";
// import { EditorPage } from "../pages/Administrativo/EditorPage";
import { DashboardLayout } from "./layouts/Dashboard";
import { TemplateLayout } from "./layouts/TemplateLayout";
import { HomeEcommece } from "../pages/Ecommerce/Home";
import { LoginPage } from "../pages/Administrativo/Login";
import { ConteudoEditorPage } from "../pages/Administrativo/EditorPage/pages/Conteudo";
import { EditorPage } from "../pages/Administrativo/EditorPage/views/Header";


export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/administrativo" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="pedidos" element={<Pedidos />} />
          <Route path="loja" element={<LojaPage />} />
          <Route path=":theme/editor-page" element={<EditorPage />} />
          <Route path=":theme/cabecario" element={<HeaderEditorPage />} />
          <Route path=":theme/conteudo" element={<ConteudoEditorPage />} />
        </Route>
        <Route path="/" element={<TemplateLayout />}>
			<Route index element={<HomeEcommece />} />
			<Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
