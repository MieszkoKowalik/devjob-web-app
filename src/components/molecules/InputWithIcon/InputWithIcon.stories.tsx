import React from "react";
import InputWithIcon from "./InputWithIcon";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ReactComponent as LocationIcon } from "assets/images/desktop/icon-location.svg";

export default {
  title: "Components/Molecules/InputWithIcon",
  component: InputWithIcon,

  args: {
    placeholder: "Placeholder text",
    icon: <LocationIcon />,
  },
} as ComponentMeta<typeof InputWithIcon>;

const Template: ComponentStory<typeof InputWithIcon> = (args) => (
  <InputWithIcon {...args} />
);
export const Default = Template.bind({});
