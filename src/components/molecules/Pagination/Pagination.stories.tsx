import Pagination from "./Pagination";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Molecules/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);
export const Default = Template.bind({});
Default.args = {
  itemsNumber: 100,
  itemsPerPage: 12,
  currentPage: 1,
};
