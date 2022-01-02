import React from "react";
import { Button } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    controls: { include: ["children", "isSecondary", "isWide"] },
  },
  argTypes: {
    isSecondary: { conrols: "boolean" },
    isWide: { conrols: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Click me",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = {
  isSecondary: true,
};
export const Wide = Template.bind({});
Wide.args = {
  isWide: true,
};
