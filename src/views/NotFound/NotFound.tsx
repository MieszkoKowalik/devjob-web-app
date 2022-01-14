import { Title } from "components/atoms/Title/Title";
import { Button } from "components/atoms/Button/Button";
import { Link } from "react-router-dom";
import { StyledViewWrapper, StyledSpan, StyledText } from "./NotFound.styles";

interface Props {}

const NotFound = (props: Props) => {
  return (
    <StyledViewWrapper>
      <Title isResponsive>
        <StyledSpan>404</StyledSpan>
        Page not found
      </Title>
      <StyledText>
        We are sorry, but the page you are looking for does not exist. Please
        use the button below to find your way back to our homepage.
      </StyledText>
      <Button isWide as={Link} to="/">
        Home Page
      </Button>
    </StyledViewWrapper>
  );
};

export default NotFound;
