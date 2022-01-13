import SearchBar from "./SearchBar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Organisms/SearchBar",
  component: SearchBar,
  args: {
    filters: {
      positionFilter: "",
      locationFilter: "",
      contractFilter: false,
    },
    setSearchParams: () => {},
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);
export const Default = Template.bind({});
