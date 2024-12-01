import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createTheme, Theme } from "@mui/material";

type Mode = "light" | "dark";

type ICustomThemeContext = {
  theme: Theme;
  mode: Mode;
  toggleMode: (nextMode: Mode) => void;
};

interface CustomThemeContextProviderProps {
  children: ReactNode;
}

export const CustomThemeContext = createContext<ICustomThemeContext | null>(
  null,
);

const STORAGE_KEY = "theme";

function getSystemPreference(): Mode {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function initMode(): Mode {
  const userPreference =
    (sessionStorage.getItem(STORAGE_KEY) as Mode | null) ??
    getSystemPreference();
  return userPreference;
}

export function CustomThemeProvider({
  children,
}: CustomThemeContextProviderProps) {
  const [mode, setMode] = useState<Mode>(initMode);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const toggleMode = useCallback((nextMode: Mode): void => {
    setMode(nextMode);
  }, []);

  const contextValue = {
    theme,
    mode,
    toggleMode,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      {children}
    </CustomThemeContext.Provider>
  );
}
