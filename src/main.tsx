import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { CustomThemeProvider } from "./contexts/CustomThemeContext.tsx";
import App from "./App.tsx";

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </StrictMode>,
  );
}
