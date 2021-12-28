import ThemeToggler from "components/molecules/ThemeToggler/ThemeToggler";
import { StyledHeader, StyledContentWrapper } from "./Header.styles";
import { ReactComponent as Logo } from "assets/images/desktop/logo.svg";
import { Link } from "react-router-dom";

interface Props {}

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <StyledContentWrapper>
        <Link to="/">
          <Logo aria-label="DevJobs"></Logo>
        </Link>
        <ThemeToggler></ThemeToggler>
      </StyledContentWrapper>
    </StyledHeader>
  );
};

export default Header;
