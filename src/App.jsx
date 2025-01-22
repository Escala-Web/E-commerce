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

function App() {
  

  return (
    <ThemeColorProvider>
      <TemplateProvider>
        <AuthProvider>
          <AppInit />
        </AuthProvider>
      </TemplateProvider>
    </ThemeColorProvider>
  );
}

export default App;
