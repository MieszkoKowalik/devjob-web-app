import JobCard from "components/organisms/JobCard/JobCard";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { IJob } from "types/Job";

export const Wrapper = styled.div`
  margin-top: calc(32px + 25px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 10px;
  row-gap: calc(24px + 25px);
`;

interface Props {}

const headers = {
  "content-type": "application/json",
};
const graphqlQuery = {
  operationName: "GetMatchingJobs",
  query: `query GetMatchingJobs($jobPosition:String){ allJobs(filter:{jobPosition:{matches:{ pattern:$jobPosition}}}){
    id
    company
    logoBackground
    logo{
      url
    }
    jobPosition 
    postedAt
    contract
    location
  } }`,
  variables: { jobPosition: "" },
};

const options = {
  method: "POST",
  headers: headers,
  body: JSON.stringify(graphqlQuery),
};

const JobsList = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([] as IJob[]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "/.netlify/functions/fetchDatoCMS",
          options
        );
        const data = await response.json();
        console.log(data);
        setJobs(data.data.allJobs);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <Wrapper>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        jobs.map((job) => <JobCard job={job} key={job.id}></JobCard>)
      )}
    </Wrapper>
  );
};

export default JobsList;
