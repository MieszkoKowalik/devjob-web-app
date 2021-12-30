import styled from "styled-components";
import { Logo } from "components/atoms/Logo/Logo";
import { ContentWrapper } from "components/molecules/ContentWrapper/ContentWrapper";
import { Link } from "react-router-dom";
import { Title } from "components/atoms/Title/Title";

export const StyledTitle = styled(Title)`
  @media ${({ theme }) => theme.breakpoints.m} {
    font-size: 1.5rem;
  }
`;

export const StyledLogo = styled(Logo)`
  margin-top: -57px;
  margin-bottom: 24px;
  @media ${({ theme }) => theme.breakpoints.m} {
    margin: unset;
    height: 140px;
    width: 140px;
    border-radius: unset;
    background-size: 60%;
  }
`;

export const CardWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.breakpoints.m} {
    flex-direction: row;
    padding: 0;
    padding-right: 42px;
    overflow: hidden;
    justify-content: flex-start;
    border-top-left-radius: 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
  @media ${({ theme }) => theme.breakpoints.m} {
    align-items: flex-start;
    margin: unset;
    margin-left: 40px;
    margin-right: auto;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
  :hover {
    color: ${({ theme }) => theme.colors.text.neutralDark};
  }
`;
