import { ThemeProvider } from "styled-components";
import { RoutesApp } from "../routes";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { ThemeColorContext } from "../context/ThemeContext";

export const AppInit = () => {

    const { theme } = useContext(ThemeColorContext);

	

	return (
		<>
			<ThemeProvider theme={theme}>
				<RoutesApp />
				<ToastContainer />
			</ThemeProvider>
		</>
	);
};
