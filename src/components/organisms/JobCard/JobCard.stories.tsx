import JobCard from "./JobCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const mockedJob = {
  id: 1,
  company: "Scoot",
  logo: "./assets/logos/scoot.svg",
  logoBackground: "hsl(36, 87%, 49%)",
  position: "Senior Software Engineer",
  postedAt: "5h ago",
  contract: "Full Time",
  location: "United Kingdom",
};

export default {
  title: "Components/Organisms/JobCard",
  component: JobCard,
  parameters: {
    layout: "centered",
  },
  args: {
    job: mockedJob,
  },
} as ComponentMeta<typeof JobCard>;

const Template: ComponentStory<typeof JobCard> = (args) => (
  <JobCard {...args} />
);
export const Default = Template.bind({});
