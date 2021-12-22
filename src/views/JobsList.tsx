import JobCard from "components/organisms/JobCard/JobCard";
import { useState, useEffect } from "react";
import styled from "styled-components";

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
  operationName: "AllJobs",
  query: `query GetAllJobs{ allJobs{
    id
    company
    logoBackground
    jobposition 
    postedAt
    contract
    location
  } }`,
  variables: {},
};

const options = {
  method: "POST",
  headers: headers,
  body: JSON.stringify(graphqlQuery),
};

const JobsList = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([
    {
      id: 3,
      company: "Vector",
      logoBackground: "hsl(235, 10%, 23%)",
      jobPosition: "Midlevel Back End Engineer",
      postedAt: "1d ago",
      contract: "Part Time",
      location: "Russia",
    },
  ]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "/.netlify/functions/fetchDatoCMS",
          options
        );
        const data = await response.json();
        console.log(data);
        setJobs(data.data.jobs);
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
