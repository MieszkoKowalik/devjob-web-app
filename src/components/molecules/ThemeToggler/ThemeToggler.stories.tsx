import React from "react";
import ThemeToggler from "./ThemeToggler";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Atoms/ThemeToggler",
  component: ThemeToggler,
} as ComponentMeta<typeof ThemeToggler>;

const Template: ComponentStory<typeof ThemeToggler> = (args) => (
  <ThemeToggler {...args} />
);
export const Default = Template.bind({});
