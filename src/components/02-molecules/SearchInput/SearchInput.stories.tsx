import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { SearchInput, SearchInputProps } from "./SearchInput";


export default {
  title: "Components/02-molecules/SearchInput",
  component: SearchInput,
} as Meta;

// Create a master template for mapping args to render the SearchInput component
const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { inputLabel: 'Search for anything' , inputIdentifier: 'search-input'};
