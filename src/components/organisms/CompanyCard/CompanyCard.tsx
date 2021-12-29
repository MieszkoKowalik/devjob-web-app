import React from "react";
import { Title } from "components/atoms/Title/Title";
import { Text } from "components/atoms/Text/Text";
import { IFullJob } from "types/Job";
import styled from "styled-components";
import { Logo } from "components/atoms/Logo/Logo";
import { ContentWrapper } from "components/molecules/ContentWrapper/ContentWrapper";
import { Link } from "react-router-dom";
import { Button } from "components/atoms/Button/Button";
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
  @media ${({ theme }) => theme.breakpoints.m} {
    align-items: flex-start;
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

interface Props {
  job: IFullJob;
  className?: string;
}
const CompanyCard = ({ job, className }: Props) => {
  return (
    <CardWrapper className={className} key={job.id}>
      <StyledLogo
        source={job.logo.url}
        backgroundColor={job.logoBackground.hex}
      ></StyledLogo>
      <InfoWrapper>
        <Title>{job.company}</Title>
        <Text isSecondary>{job.website.replace("https://", "")}</Text>
      </InfoWrapper>
      <Button isSecondary as="a" href={job.website}>
        Company Site
      </Button>
    </CardWrapper>
  );
};

export default CompanyCard;
