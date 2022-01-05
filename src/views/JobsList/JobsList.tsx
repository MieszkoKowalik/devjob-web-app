import JobCard from "components/organisms/JobCard/JobCard";
import { IJob } from "types/Job";
import { ListWrapper, StyledButton } from "./JobsList.styles";
import { useQuery, gql } from "@apollo/client";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
interface Props {}

interface JobsData {
  allJobs: IJob[];
}

interface JobsVars {
  jobPosition: string;
  first: number;
  skip: number;
}

const GET_MATCHING_JOBS = gql`
  query GetMatchingJobs(
    $jobPosition: String!
    $first: IntType
    $skip: IntType
  ) {
    allJobs(
      first: $first
      skip: $skip
      filter: { jobPosition: { matches: { pattern: $jobPosition } } }
    ) {
      id
      company
      logoBackground {
        hex
      }
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
const JOB_NO_TO_FETCH = 12;

const JobsList = (props: Props) => {
  const { loading, data, fetchMore } = useQuery<JobsData, JobsVars>(
    GET_MATCHING_JOBS,
    {
      variables: {
        jobPosition: "",
        first: JOB_NO_TO_FETCH,
        skip: 0,
      },
    }
  );

  return (
    <ViewWrapper>
      <ListWrapper>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data &&
          data.allJobs.map((job) => (
            <JobCard data-testid="card" job={job} key={job.id}></JobCard>
          ))
        )}
      </ListWrapper>
      {data && (
        <StyledButton
          isWide
          onClick={() =>
            fetchMore({ variables: { skip: data.allJobs.length } })
          }
        >
          Load more
        </StyledButton>
      )}
    </ViewWrapper>
  );
};

export default JobsList;
