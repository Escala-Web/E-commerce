import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { RoutesApp } from "./routes";
import { AuthProvider } from "./context/Auth";
import { HeaderProvider } from "./context/Header";

function App() {
	return (
		<>
			<AuthProvider>
			<HeaderProvider>
				<ThemeProvider theme={theme}>
					<RoutesApp />
				</ThemeProvider>
				</HeaderProvider>
			</AuthProvider>
		</>
	);
}

export default App;
