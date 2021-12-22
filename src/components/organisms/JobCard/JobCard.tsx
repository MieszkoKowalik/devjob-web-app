import React from "react";
import DotSeperatedText from "components/molecules/DotSeperatedText/DotSeperatedText";
import { Title } from "components/atoms/Title/Title";
import { Text } from "components/atoms/Text/Text";
import { Location } from "components/atoms/Location/Location";
import { StyledLogo, CardWrapper, InfoWrapper } from "./JobCard.styles";

interface Props {
  job: {
    id: number;
    company: string;
    logoBackground: string;
    jobPosition: string;
    postedAt: string;
    contract: string;
    location: string;
  };
}

const JobCard = ({ job }: Props) => {
  return (
    <CardWrapper key={job.id}>
      <div>
        <StyledLogo backgroundColor={job.logoBackground} />
        <InfoWrapper>
          <DotSeperatedText
            isSecondary
            before={job.postedAt}
            after={job.contract}
          />
          <Title>{job.jobPosition}</Title>
          <Text isSecondary>{job.company}</Text>
        </InfoWrapper>
      </div>

      <Location>{job.location}</Location>
    </CardWrapper>
  );
};

export default JobCard;
