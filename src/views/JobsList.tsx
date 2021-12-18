import JobCard from "components/organisms/JobCard/JobCard";
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

const JobsList = (props: Props) => {
  return (
    <Wrapper>
      {jobs.map((job) => (
        <JobCard job={job} key={job.id}></JobCard>
      ))}
    </Wrapper>
  );
};

export default JobsList;
