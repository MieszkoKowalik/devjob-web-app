import { Text } from "components/atoms/Text/Text";
import { IFullJob } from "types/Job";
import { Button } from "components/atoms/Button/Button";
import {
  CardWrapper,
  StyledLogo,
  InfoWrapper,
  StyledTitle,
} from "./CompanyCard.styles";
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
        <StyledTitle>{job.company}</StyledTitle>
        <Text isSecondary>{job.website.replace("https://", "")}</Text>
      </InfoWrapper>
      <Button isSecondary as="a" href={job.website}>
        Company Site
      </Button>
    </CardWrapper>
  );
};

export default CompanyCard;
