import React from "react";
import useMediaQuery from "hooks/useMediaQuery";
import { IFullJob } from "types/Job";
import { Title } from "components/atoms/Title/Title";
import { Text } from "components/atoms/Text/Text";
import {
  StyledContentWrapper,
  StyledViewWrapper,
  InfoWrapper,
  StyledButton,
} from "./JobFooter.styles";

interface Props {
  job: IFullJob;
}

const JobFooter = ({ job }: Props) => {
  const matches = useMediaQuery("(min-width:768px)");

  return (
    <StyledContentWrapper>
      <StyledViewWrapper isNarrow>
        {matches ? (
          <InfoWrapper>
            <Title>{job.jobPosition}</Title>
            <Text isSecondary>{job.company}</Text>
          </InfoWrapper>
        ) : null}
        <StyledButton isWide>Apply Now</StyledButton>
      </StyledViewWrapper>
    </StyledContentWrapper>
  );
};

export default JobFooter;
