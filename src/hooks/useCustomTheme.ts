import { useContext } from "react";
import { CustomThemeContext } from "@/contexts/CustomThemeContext";

export function useCustomTheme() {
  const themeContext = useContext(CustomThemeContext);
  if (themeContext === null) {
    throw new Error("CustomTheme context was used outside of its provider.");
  }
  return themeContext;
}
