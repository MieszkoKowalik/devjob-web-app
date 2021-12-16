import React from "react";
import { Title } from "./Title";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Atoms/Title",
  component: Title,
  parameters: {
    controls: { include: "children" },
  },
  args: {
    children: "Title text",
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;
export const Default = Template.bind({});
