import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Header } from "../components/Header";
import { ContainerContent, ContainerRouter } from "./style";
import { Pedidos } from "../pages/Pedidos";
import { LojaPage } from "../pages/Loja";
import { EditorPage } from "../pages/EditorPage";
import { Teste } from "../components/Teste";
import { Login } from "../pages/Login";

export const RoutesApp = () => {


	return (
		<>
			
		
				<BrowserRouter>
				<ContainerRouter>
					<Header />
					<ContainerContent>
						<Routes>
							<Route exact path="/administrativo/" element={<Dashboard />} />
							<Route path="/administrativo/pedidos" element={<Pedidos />} />
							<Route path="/administrativo/loja" element={<LojaPage />}/>
							<Route path="/administrativo/:theme/editor-page" element={<EditorPage />}/>
						</Routes>
					</ContainerContent>
				</ContainerRouter>
			</BrowserRouter>
			
			
		




		</>
	);
};


