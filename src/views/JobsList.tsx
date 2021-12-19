import JobCard from "components/organisms/JobCard/JobCard";
import { useEffect } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: calc(32px + 25px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 10px;
  row-gap: calc(24px + 25px);
`;

interface Props {}

const jobs = [
  {
    id: 1,
    company: "Scoot",
    logo: "./assets/logos/scoot.svg",
    logoBackground: "hsl(36, 87%, 49%)",
    position: "Senior Software Engineer",
    postedAt: "5h ago",
    contract: "Full Time",
    location: "United Kingdom",
  },
  {
    id: 2,
    company: "Blogr",
    logo: "./assets/logos/blogr.svg",
    logoBackground: "hsl(12, 79%, 52%)",
    position: "Haskell and PureScript Dev",
    postedAt: "20h ago",
    contract: "Part Time",
    location: "United States",
  },
  {
    id: 3,
    company: "Vector",
    logo: "./assets/logos/vector.svg",
    logoBackground: "hsl(235, 10%, 23%)",
    position: "Midlevel Back End Engineer",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Russia",
  },
];

const token = "TOKEN";

const headers = {
  "content-type": "application/json",
  Authorization: `Bearer ${token}`,
};
const graphqlQuery = {
  operationName: "AllJobs",
  query: `query GetAllJobs { allJobs{
    company
    jobposition
  } }`,
  variables: {},
};

const options = {
  method: "POST",
  headers: headers,
  body: JSON.stringify(graphqlQuery),
};

const JobsList = (props: Props) => {
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://graphql.datocms.com/", options);
        console.log(response, "res");
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <Wrapper>
      {jobs.map((job) => (
        <JobCard job={job} key={job.id}></JobCard>
      ))}
    </Wrapper>
  );
};

export default JobsList;
