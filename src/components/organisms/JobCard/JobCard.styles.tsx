import styled from "styled-components";
import { Logo } from "components/atoms/Logo/Logo";
import { ContentWrapper } from "components/molecules/ContentWrapper/ContentWrapper";
import { Link } from "react-router-dom";

export const StyledLogo = styled(Logo)`
  margin-top: -57px;
  margin-bottom: 24px;
`;

export const CardWrapper = styled(ContentWrapper)`
  height: 228px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
  :hover {
    color: ${({ theme }) => theme.colors.text.neutralDark};
  }
`;
