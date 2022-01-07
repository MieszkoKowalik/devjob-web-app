import JobCard from "components/organisms/JobCard/JobCard";
import { IJob } from "types/Job";
import { ListWrapper, StyledButton } from "./JobsList.styles";
import { useQuery, gql } from "@apollo/client";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import SearchBar from "components/organisms/SearchBar/SearchBar";
interface Props {}

interface JobsData {
  allJobs: IJob[];
}

interface JobsVars {
  jobPosition: string;
  location: string;
  contract: string;
  first: number;
  skip: number;
}

const GET_MATCHING_JOBS = gql`
  query GetMatchingJobs(
    $jobPosition: String!
    $location: String!
    $contract: String!
    $first: IntType
    $skip: IntType
  ) {
    allJobs(
      first: $first
      skip: $skip
      filter: {
        jobPosition: { matches: { pattern: $jobPosition } }
        location: { matches: { pattern: $location } }
        contract: { matches: { pattern: $contract } }
      }
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
  const [searchParams, setSearchParams] = useSearchParams({});

  const filters = {
    positionFilter: searchParams.get("position"),
    locationFilter: searchParams.get("location"),
    contractFilter: searchParams.get("fullTime") ? true : false,
  };
  console.log(filters);

  const { loading, data, fetchMore, refetch } = useQuery<JobsData, JobsVars>(
    GET_MATCHING_JOBS,
    {
      variables: {
        jobPosition: filters.positionFilter || "",
        location: filters.locationFilter || "",
        contract: filters.contractFilter ? "Full Time" : "",
        first: JOB_NO_TO_FETCH,
        skip: 0,
      },
    }
  );
  useEffect(() => {
    refetch();
  }, [searchParams, refetch]);

  return (
    <ViewWrapper>
      <SearchBar filters={filters} setSearchParams={setSearchParams} />
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
