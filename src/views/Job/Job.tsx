import { Navigate, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import CompanyCard from "components/organisms/CompanyCard/CompanyCard";
import JobFooter from "components/organisms/JobFooter/JobFooter";
import JobDetails from "components/organisms/JobDetails/JobDetails";
import { StyledViewWrapper, CenteredLoader } from "./Job.styles";
import { IFullJob } from "types/Job";
interface Props {}

interface JobData {
  job: IFullJob;
}
interface JobVars {
  id: string | undefined;
}

const JOB = gql`
  query GetJob($id: ItemId) {
    job(filter: { id: { eq: $id } }) {
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
      description
      requirementsContent
      requirementsList {
        element
      }
      roleContent
      roleList {
        element
      }
      website
    }
  }
`;

const Job = (props: Props) => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<JobData, JobVars>(JOB, {
    variables: {
      id: id,
    },
  });
  if (error || (data && data.job === null)) {
    return <Navigate to="/not-found" />;
  }
  return (
    <StyledViewWrapper isNarrow>
      {loading ? (
        <CenteredLoader></CenteredLoader>
      ) : (
        data && (
          <>
            <CompanyCard job={data.job} />
            <JobDetails job={data.job} />
            <JobFooter job={data.job} />
          </>
        )
      )}
    </StyledViewWrapper>
  );
};

export default Job;
