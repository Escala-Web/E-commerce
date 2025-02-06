import { AuthProvider } from "./context/Auth";
import { TemplateProvider } from "./context/Template";
import { ThemeColorContext, ThemeColorProvider } from "./context/ThemeContext";
import { useContext } from "react";
import { AppInit } from "./core";
import { FavoriteContext, FavoriteProvider } from "./context/Favorite";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
	return (
		<ThemeColorProvider>
			<HelmetProvider>
				<TemplateProvider>
					<FavoriteProvider>
						<AuthProvider>
							<AppInit />
						</AuthProvider>
					</FavoriteProvider>
				</TemplateProvider>
			</HelmetProvider>
		</ThemeColorProvider>
	);
}

export default App;
