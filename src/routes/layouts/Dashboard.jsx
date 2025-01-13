import { BrowserRouter, Routes } from "react-router-dom";
import { Header } from "../../components/Header";
import { ContainerContent, ContainerRouter } from "../style";

export const DashboardLayout = ({ children }) => {
	return (
		<>
			
				<ContainerRouter>
					<Header />
					<ContainerContent>
						<Routes>
                            {children}
                        </Routes>
					</ContainerContent>
				</ContainerRouter>
			
		</>
	);
};
