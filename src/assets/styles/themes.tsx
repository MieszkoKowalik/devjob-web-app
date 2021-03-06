import { DefaultTheme } from "styled-components";

const theme = {
  breakpoints: {
    m: "(min-width:768px)",
    l: "(min-width:1024px)",
    xl: "(min-width:1210px)",
  },
};

export const lightTheme: DefaultTheme = {
  ...theme,
  mode: "light",
  colors: {
    text: {
      primary: "hsl(219,29%,14%)",
      neutralDark: "hsl(214,24%,35%)",
      neutral: "hsl(214,17%,45%)",
      neutralLight: "#fff",
      accent: "hsl(235,69%,61%)",
      accentDark: "hsl(235,65%,50%)",
    },
    bg: {
      primary: "hsl(210,22%,96%)",
      neutral: "#fff",
      neutralDark: "hsl(210,4%,91%)",
      accentDark: "hsl(235,69%,61%)",
      accent: "hsl(235,82%,77%)",
      accentLight: "hsl(235,68%,86%)",
      accentVeryLight: "hsl(236, 70%, 96%)",
    },
  },
};

export const darkTheme: DefaultTheme = {
  ...theme,
  mode: "dark",
  colors: {
    text: {
      primary: "#fff",
      neutralDark: "hsl(212,23%,69%)", // hsl(212,20%,65%)"
      neutral: "hsl(212,20%,55%)", //"hsl(212,23%,69%)"
      neutralLight: "#fff",
      accent: "hsl(235,82%,77%)",
      accentDark: "#fff",
    },
    bg: {
      primary: "hsl(220,29%,10%)",
      neutral: "hsl(219,29%,14%)",
      neutralDark: "hsl(220,16%,22%)",
      accentDark: "hsl(235,69%,61%)",
      accent: "hsl(235,82%,77%)",
      accentLight: "hsl(214,17%,45%)",
      accentVeryLight: "hsl(220,16%,22%)",
    },
  },
};
