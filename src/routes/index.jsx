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

	const location = window.location.pathname

	console.log(location)

	return (
		<>
			
			{location !== '/login' ? 
				<BrowserRouter>

				<ContainerRouter>
					<Header />
					<ContainerContent>
						<Routes>
							<Route exact path="/" element={<Dashboard />} />
							<Route path="/pedidos" element={<Pedidos />} />
							<Route path="/loja" element={<LojaPage />}/>
							<Route path="/:theme/editor-page" element={<EditorPage />}/>
						</Routes>
					</ContainerContent>
				</ContainerRouter>



			</BrowserRouter>
			: 
			
			<BrowserRouter>

				
					
						<Routes>
							<Route path="/login" element={<Login />} />

						</Routes>
					
			
			</BrowserRouter>
			}




		</>
	);
};


