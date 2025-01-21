import { ThemeProvider } from "styled-components";

import { blueTheme, orangeTheme, greenTheme, redTheme, purpleTheme,blackTheme} from './theme/themeTemplates';

import { RoutesApp } from "./routes";
import { AuthProvider } from "./context/Auth";
import { TemplateProvider } from "./context/Template";
import { ToastContainer } from "react-toastify";
import { ThemeColorContetx } from "./context/ThemeContext";
function App() {
	return (
		<>
			<TemplateProvider>
					<ThemeColorContetx>
				<AuthProvider>
						<ThemeProvider theme={blueTheme}>
							<RoutesApp />
							<ToastContainer />
						</ThemeProvider>
				</AuthProvider>
					</ThemeColorContetx>
			</TemplateProvider>
		</>
	);
}

export default App;
