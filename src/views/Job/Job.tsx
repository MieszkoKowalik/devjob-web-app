import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import CompanyCard from "components/organisms/CompanyCard/CompanyCard";
import JobFooter from "components/organisms/JobFooter/JobFooter";
import JobDetails from "components/organisms/JobDetails/JobDetails";

interface Props {}

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
  const { loading, error, data } = useQuery(JOB, {
    variables: {
      id: id,
    },
  });
  console.log(data, "response data");
  if (data && data.job === null) {
    return <Navigate to="/not-found" />;
  }
  return (
    <ViewWrapper isNarrow>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <CompanyCard job={data.job} />
          <JobDetails job={data.job} />
          <JobFooter job={data.job} />
        </>
      )}
    </ViewWrapper>
  );
};

export default Job;
