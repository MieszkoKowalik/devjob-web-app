import React, { useContext } from "react";
import { ReactComponent as MoonIcon } from "assets/images/desktop/icon-moon.svg";
import { ReactComponent as SunIcon } from "assets/images/desktop/icon-sun.svg";
import { ThemesContext } from "providers/ThemesProvider";
import { StyledLabel } from "./ThemeToggler.styles";

interface Props {}
const ThemeToggler = (props: Props) => {
  const { isDarkMode, toggleTheme } = useContext(ThemesContext);
  return (
    <StyledLabel aria-label="Dark Mode" htmlFor="dark mode">
      <input
        checked={isDarkMode}
        onChange={toggleTheme}
        type="checkbox"
        name="dark mode"
        id="dark mode"
      />
      <SunIcon />
      <div></div>
      <MoonIcon />
    </StyledLabel>
  );
};

export default ThemeToggler;
