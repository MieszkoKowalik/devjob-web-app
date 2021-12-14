import ThemeToggler from "components/molecules/ThemeToggler/ThemeToggler";
import { StyledHeader, StyledContentWrapper } from "./Header.styles";
import { ReactComponent as Logo } from "assets/images/desktop/logo.svg";

interface Props {}

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <StyledContentWrapper>
        <Logo aria-label="DevJobs"></Logo>
        <ThemeToggler></ThemeToggler>
      </StyledContentWrapper>
    </StyledHeader>
  );
};

export default Header;
