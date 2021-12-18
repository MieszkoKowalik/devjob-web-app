import React from "react";
import DotSeperatedText from "./DotSeperatedText";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Molecules/DotSeperatedText",
  component: DotSeperatedText,

  args: {
    before: "Text before",
    after: "Text after",
  },
} as ComponentMeta<typeof DotSeperatedText>;

const Template: ComponentStory<typeof DotSeperatedText> = (args) => (
  <DotSeperatedText {...args} />
);
export const Default = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = {
  isSecondary: true,
};
