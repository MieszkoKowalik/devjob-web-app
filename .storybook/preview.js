export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import { lightTheme, darkTheme } from "assets/styles/themes.tsx";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "assets/styles/globalStyle.tsx";
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
      showName: true,
    },
  },
};

const MyThemes = {
  dark: darkTheme,
  light: lightTheme,
};

const getTheme = (themeName) => {
  return MyThemes[themeName];
};

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
