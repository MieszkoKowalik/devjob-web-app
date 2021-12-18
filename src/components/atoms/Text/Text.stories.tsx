import React from "react";
import { Text } from "./Text";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Atoms/Text",
  component: Text,
  parameters: {
    controls: { include: ["children", "isSecondary"] },
  },
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, culpa praesentium delectus iste ipsa dolore rem corrupti nisi fugit ad nesciunt non repellendus recusandae rerum reprehenderit ex similique natus ducimus.",
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;
export const Default = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = {
  isSecondary: true,
};
