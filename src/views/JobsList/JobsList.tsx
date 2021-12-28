import JobCard from "components/organisms/JobCard/JobCard";
import { IJob } from "types/Job";
import { Wrapper } from "./JobsList.styles";
import { useQuery, gql } from "@apollo/client";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
interface Props {}

const MATCHING_JOBS = gql`
  query GetMatchingJobs($jobPosition: String) {
    allJobs(filter: { jobPosition: { matches: { pattern: $jobPosition } } }) {
      id
      company
      logoBackground
      logo {
        url
      }
      jobPosition
      postedAt
      contract
      location
    }
  }
`;

const JobsList = (props: Props) => {
  const { loading, error, data } = useQuery(MATCHING_JOBS, {
    variables: { jobPosition: "" },
  });
  console.log(data);
  return (
    <ViewWrapper>
      <Wrapper>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data.allJobs.map((job: IJob) => (
            <JobCard job={job} key={job.id}></JobCard>
          ))
        )}
      </Wrapper>
    </ViewWrapper>
  );
};

export default JobsList;
