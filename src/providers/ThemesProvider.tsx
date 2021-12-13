import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "assets/styles/themes";
import { createContext, useState, useEffect } from "react";

interface ThemesContextInterface {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemesContext = createContext<ThemesContextInterface>(
  {} as ThemesContextInterface
);

const ThemesProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", (!isDarkMode).toString());
  };
  const setOSPreferedTheme = () => {
    const preferesDarkScheme = window.matchMedia(
      "(prefers-color-scheme:dark"
    ).matches;
    if (preferesDarkScheme) {
      setIsDarkMode(true);
    }
  };
  useEffect(() => {
    const colorPreferenceInLS = localStorage.getItem("darkMode");
    const hasColorPreferenceInLS = typeof colorPreferenceInLS === "string";
    if (!hasColorPreferenceInLS) {
      setOSPreferedTheme();
      return;
    }
    const isDarkModeInLS = JSON.parse(colorPreferenceInLS);
    if (isDarkModeInLS) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <ThemesContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  );
};
export default ThemesProvider;
