import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { RoutesApp } from "./routes";
import { AuthProvider } from "./context/Auth";

function App() {
	return (
		<>
			<AuthProvider>
				<ThemeProvider theme={theme}>
					<RoutesApp />
				</ThemeProvider>
			</AuthProvider>
		</>
	);
}

export default App;
