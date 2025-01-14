import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { RoutesApp } from "./routes";
import { AuthProvider } from "./context/Auth";
import { HeaderProvider } from "./context/Header";
import { TemplateProvider } from "./context/Template";

function App() {

	
	return (
		<>
			<TemplateProvider>
				<AuthProvider>
					<HeaderProvider>
						<ThemeProvider theme={theme}>
							<RoutesApp />
						</ThemeProvider>
					</HeaderProvider>
				</AuthProvider>
			</TemplateProvider>
		</>
	);
}

export default App;
