import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Input, InputProps } from "./Input";


export default {
  title: "Components/01-atoms/Input",
  component: Input,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<InputProps> = (args) => <Input {...args} />;

// Reuse that template for creating different stories
export const Search = Template.bind({});
Search.args = { labelText: "Search the site 🔎", identifier: 'search-input' };

export const GoodNightStory = Template.bind({});
GoodNightStory.args = { type:"textarea", labelText: "Tell me a good night story 😴", identifier: 'sleep-input' };
