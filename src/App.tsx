import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { useCustomTheme } from "./hooks/useCustomTheme";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import PageLayout from "./layouts/PageLayout";
import { LocationProvider } from "./contexts/LocationContext";

/**
 * Tuto en cours:
 * https://www.youtube.com/watch?v=o1chMISeTC0
 */

export default function App() {
  const { theme } = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <LocationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<Home />} />
              <Route path="tours/:id" element={<Tour />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LocationProvider>
    </ThemeProvider>
  );
}
