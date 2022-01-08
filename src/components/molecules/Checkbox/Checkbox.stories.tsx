import React from "react";
import Checkbox from "./Checkbox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Molecules/Checkbox",
  component: Checkbox,
  argTypes: { onClick: { action: "clicked" } },
  args: {
    label: "Label",
    isChecked: false,
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);
export const Default = Template.bind({});
