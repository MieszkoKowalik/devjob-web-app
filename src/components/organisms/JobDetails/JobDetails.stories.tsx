import JobDetails from "./JobDetails";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { db } from "mocks/db";
import { IFullJob } from "types/Job";
const mockedJob = db.job.getAll()[0] as unknown as IFullJob;

export default {
  title: "Components/Organisms/JobDetails",
  component: JobDetails,
  parameters: {
    layout: "centered",
  },
  args: {
    job: mockedJob,
  },
} as ComponentMeta<typeof JobDetails>;

const Template: ComponentStory<typeof JobDetails> = (args) => (
  <JobDetails {...args} />
);
export const Default = Template.bind({});
