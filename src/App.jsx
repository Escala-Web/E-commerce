import { AuthProvider } from "./context/Auth";
import { TemplateProvider } from "./context/Template";
import { ThemeColorContext, ThemeColorProvider } from "./context/ThemeContext";
import { useContext } from "react";
import { AppInit } from "./core";
import { FavoriteProvider } from "./context/Favorite";
import {  HelmetProvider } from "react-helmet-async";
import { RegisterProvider } from "./context/RegisterUser";

function App() {
	return (
		<ThemeColorProvider>
			<HelmetProvider>
				<TemplateProvider>
					<FavoriteProvider>
						<RegisterProvider>
							<AuthProvider>
								<AppInit />
							</AuthProvider>
						</RegisterProvider>
					</FavoriteProvider>
				</TemplateProvider>
			</HelmetProvider>
		</ThemeColorProvider>
	);
}

export default App;
