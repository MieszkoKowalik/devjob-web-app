import React from "react";
import DotSeperatedText from "components/molecules/DotSeperatedText/DotSeperatedText";
import { Title } from "components/atoms/Title/Title";
import { Text } from "components/atoms/Text/Text";
import { Location } from "components/atoms/Location/Location";
import {
  StyledLogo,
  CardWrapper,
  InfoWrapper,
  StyledLink,
} from "./JobCard.styles";
import { IJob } from "types/Job";
interface Props {
  job: IJob;
}

const JobCard = ({ job }: Props) => {
  return (
    <CardWrapper key={job.id}>
      <div>
        <StyledLogo
          source={job.logo.url}
          backgroundColor={job.logoBackground.hex}
        ></StyledLogo>
        <InfoWrapper>
          <DotSeperatedText
            isSecondary
            before={job.postedAt}
            after={job.contract}
          />
          <Title>
            <StyledLink to={`job/${job.id}`}> {job.jobPosition}</StyledLink>
          </Title>
          <Text isSecondary>{job.company}</Text>
        </InfoWrapper>
      </div>

      <Location>{job.location}</Location>
    </CardWrapper>
  );
};

export default JobCard;
