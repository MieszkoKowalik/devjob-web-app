export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

if (typeof global.process === "undefined") {
  const { worker } = require("../src/mocks/browser");
  worker.start();
}

import { lightTheme, darkTheme } from "assets/styles/themes.tsx";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "assets/styles/globalStyle.tsx";
import { MemoryRouter } from "react-router";
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
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story {...context} />
      </ThemeProvider>
    </MemoryRouter>
  );
};
export const decorators = [withThemeProvider];
