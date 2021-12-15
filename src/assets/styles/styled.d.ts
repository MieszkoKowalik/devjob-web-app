// import original module declarations
import "styled-components";

// and extend them!

export type Theme = "light" | "dark";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: Theme;

    colors: {
      text: {
        primary: string;
        neutralDark: string;
        neutral: string;
        neutralLight: string;
        accent: string;
        accentDark: string;
      };
      bg: {
        primary: string;
        neutral: string;
        accentDark: string;
        accent: string;
        accentLight: string;
        accentVeryLight: string;
      };
    };
    breakpoints: {
      m: string;
      l: string;
      xl: string;
    };
  }
}
