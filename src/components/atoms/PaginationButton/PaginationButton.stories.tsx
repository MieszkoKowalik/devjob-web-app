import { PaginationButton } from "./PaginationButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Atoms/PaginationButton",
  component: PaginationButton,
  parameters: {
    controls: { include: ["children", "isActive"] },
  },

  args: {
    children: "1",
  },
} as ComponentMeta<typeof PaginationButton>;

const Template: ComponentStory<typeof PaginationButton> = (args) => (
  <PaginationButton {...args} />
);
export const Default = Template.bind({});
export const Active = Template.bind({});
Active.args = {
  isActive: true,
};
