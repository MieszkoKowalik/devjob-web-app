import Header from "./Header";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;
export const Default = Template.bind({});
