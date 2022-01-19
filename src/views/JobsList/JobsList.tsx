import JobCard from "components/organisms/JobCard/JobCard";
import { IJob } from "types/Job";
import { ListWrapper } from "./JobsList.styles";
import { useQuery, gql } from "@apollo/client";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "components/organisms/SearchBar/SearchBar";
import Loader from "components/molecules/Loader/Loader";
import Pagination from "components/molecules/Pagination/Pagination";
import { Filters } from "types/Filters";
interface Props {}

interface JobsData {
  allJobs: IJob[];
}
interface JobsCountData {
  _allJobsMeta: {
    count: number;
  };
}

interface JobsVars {
  jobPosition: string;
  location: string;
  contract: string;
  first: number;
  skip: number;
}
interface JobsCountVars {
  jobPosition: string;
  location: string;
  contract: string;
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

const GET_JOBS_COUNT = gql`
  query GetJobsCount(
    $jobPosition: String!
    $location: String!
    $contract: String!
  ) {
    _allJobsMeta(
      filter: {
        jobPosition: { matches: { pattern: $jobPosition } }
        location: { matches: { pattern: $location } }
        contract: { matches: { pattern: $contract } }
      }
    ) {
      count
    }
  }
`;
const JOBS_PER_PAGE = 12;

const JobsList = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    positionFilter: searchParams.get("position") || "",
    locationFilter: searchParams.get("location") || "",
    contractFilter: searchParams.get("fullTime") ? true : false,
  });
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page") || "1")
  );
  const [skip, setSkip] = useState((currentPage - 1) * JOBS_PER_PAGE);

  const { loading, data, refetch, fetchMore } = useQuery<JobsData, JobsVars>(
    GET_MATCHING_JOBS,
    {
      variables: {
        jobPosition: filters.positionFilter,
        location: filters.locationFilter,
        contract: filters.contractFilter ? "Full Time" : "",
        first: JOBS_PER_PAGE,
        skip: skip,
      },
    }
  );

  const { data: jobsCount, refetch: refetchJobsCount } = useQuery<
    JobsCountData,
    JobsCountVars
  >(GET_JOBS_COUNT, {
    variables: {
      jobPosition: filters.positionFilter,
      location: filters.locationFilter,
      contract: filters.contractFilter ? "Full Time" : "",
    },
  });

  const onSearchBarSubmit = ({
    positionFilter,
    locationFilter,
    contractFilter,
  }: Filters) => {
    const params: { position?: string; location?: string; fullTime?: string } =
      {};
    if (positionFilter) params.position = positionFilter;
    if (locationFilter) params.location = locationFilter;
    if (contractFilter) params.fullTime = "true";
    setSearchParams(params);
  };

  const onPageChange = (page: number) => {
    setSearchParams({ ...searchParams, page: `${page}` });
  };

  useEffect(() => {
    const paramsPage = searchParams.get("page");
    const paramsPageInt = parseInt(paramsPage || "1");
    if (paramsPageInt !== currentPage) setCurrentPage(paramsPageInt);

    const { positionFilter, locationFilter, contractFilter } = {
      positionFilter: searchParams.get("position") || "",
      locationFilter: searchParams.get("location") || "",
      contractFilter: searchParams.get("fullTime") ? true : false,
    };

    if (
      positionFilter !== filters.positionFilter ||
      ((locationFilter !== filters.locationFilter) !== contractFilter) !==
        filters.contractFilter
    ) {
      setCurrentPage(1);
      setSkip(0);
      setFilters({ positionFilter, locationFilter, contractFilter });
    }
  }, [searchParams, currentPage, filters]);

  useEffect(() => {
    fetchMore({ variables: { skip: (currentPage - 1) * JOBS_PER_PAGE } }).then(
      () => setSkip((currentPage - 1) * JOBS_PER_PAGE)
    );
    window.scrollTo({ top: 0 });
  }, [currentPage, fetchMore]);

  useEffect(() => {
    refetch();
    refetchJobsCount();
  }, [filters, refetch, refetchJobsCount]);

  return (
    <ViewWrapper>
      <SearchBar filters={filters} onSubmit={onSearchBarSubmit} />
      <ListWrapper>
        {loading ? (
          <Loader></Loader>
        ) : (
          data &&
          data.allJobs.map((job) => (
            <JobCard data-testid="card" job={job} key={job.id}></JobCard>
          ))
        )}
      </ListWrapper>
      {jobsCount && (
        <Pagination
          itemsNumber={jobsCount._allJobsMeta.count}
          itemsPerPage={JOBS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={onPageChange}
        ></Pagination>
      )}
    </ViewWrapper>
  );
};

export default JobsList;
