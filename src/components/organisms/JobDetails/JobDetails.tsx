import React from "react";
import { IFullJob } from "types/Job";

import { Text } from "components/atoms/Text/Text";
import { Title } from "components/atoms/Title/Title";
import { Button } from "components/atoms/Button/Button";
import { Location } from "components/atoms/Location/Location";
import DotSeperatedText from "components/molecules/DotSeperatedText/DotSeperatedText";
import {
  StyledContentWrapper,
  Wrapper,
  MainTitle,
  SectionWrapper,
} from "./JobDetals.styles";

interface Props {
  job: IFullJob;
}

const JobDetails = ({ job }: Props) => {
  return (
    <StyledContentWrapper>
      <Wrapper>
        <div>
          <DotSeperatedText
            isSecondary
            before={job.postedAt}
            after={job.contract}
          />
          <MainTitle>{job.jobPosition}</MainTitle>
          <Location>{job.location}</Location>
        </div>

        <Button isWide>Apply Now</Button>
      </Wrapper>
      <SectionWrapper>
        <Text>{job.description}</Text>
      </SectionWrapper>
      <SectionWrapper>
        <Title as="h2">Requirements</Title>
        <Text>{job.requirementsContent}</Text>
        <ul>
          {job.requirementsList.map(({ element }, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </SectionWrapper>
      <SectionWrapper>
        <Title as="h2">What You Will Do</Title>
        <Text>{job.roleContent}</Text>
        <ol>
          {job.roleList.map(({ element }, index) => (
            <li key={index}>{element}</li>
          ))}
        </ol>
      </SectionWrapper>
    </StyledContentWrapper>
  );
};

export default JobDetails;
