import React from "react";
import { useParams } from "react-router-dom";
import { Title } from "components/atoms/Title/Title";
import { useQuery, gql } from "@apollo/client";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
interface Props {}

const JOB = gql`
  query GetJob($id: String) {
    job(filter: { id: { eq: $id } }) {
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

const Job = (props: Props) => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(JOB, {
    variables: {
      id: id,
    },
  });
  console.log(data, "response data");
  return (
    <ViewWrapper isNarrow>
      {loading ? <h1>Loading...</h1> : <Title>Job: {id}</Title>}
    </ViewWrapper>
  );
};

export default Job;
