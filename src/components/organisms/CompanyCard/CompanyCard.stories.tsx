import CompanyCard from "./CompanyCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import mockLogo from "mocks/assets/blogr.svg";
const mockedJob = {
  id: "1",
  company: "Scoot",
  logoBackground: { hex: "hsl(36, 87%, 49%)" },
  logo: { url: mockLogo },
  jobPosition: "Senior Software Engineer",
  postedAt: "5h ago",
  contract: "Full Time",
  location: "United Kingdom",
  website: "https://scoot.com",
};

export default {
  title: "Components/Organisms/CompanyCard",
  component: CompanyCard,
  args: {
    job: mockedJob,
  },
} as ComponentMeta<typeof CompanyCard>;

const Template: ComponentStory<typeof CompanyCard> = (args) => (
  <CompanyCard {...args} />
);
export const Default = Template.bind({});
