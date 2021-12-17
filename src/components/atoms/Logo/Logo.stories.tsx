import React from "react";
import { Logo } from "./Logo";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Atoms/Logo",
  component: Logo,
  parameters: {
    controls: { include: "backgroundColor" },
  },
  argTypes: {
    backgroundColor: { controls: "color" },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;
export const Default = Template.bind({});
