import Modal from "./Modal";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Organisms/Modal",
  component: Modal,

  args: {
    isOpen: true,
    children: "Content",
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;
export const Default = Template.bind({});
