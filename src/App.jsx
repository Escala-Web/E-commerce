import { ThemeProvider } from "styled-components";
import {
	blueTheme,
	orangeTheme,
	greenTheme,
	redTheme,
	purpleTheme,
	blackTheme,
} from "./theme/themeTemplates";

import { RoutesApp } from "./routes";
import { AuthProvider } from "./context/Auth";
import { TemplateProvider } from "./context/Template";
import { ToastContainer } from "react-toastify";
import { ThemeColorContext, ThemeColorProvider } from "./context/ThemeContext";
import { useContext } from "react";
import { AppInit } from "./core";
import { FavoriteContext, FavoriteProvider } from "./context/Favorite";

function App() {
	return (
		<ThemeColorProvider>
			<TemplateProvider>
				<FavoriteProvider>
					<AuthProvider>
						<AppInit />
					</AuthProvider>
				</FavoriteProvider>
			</TemplateProvider>
		</ThemeColorProvider>
	);
}

export default App;
