import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { <%= name %>, <%= name %>Props } from "./<%= name %>";

export default {
  title: "Components/<%= type %>/<%= name %>",
  component: <%= name %>,
} as Meta;

// Create a master template for mapping args to render the <%= name %> component
const Template: Story<<%= name %>Props> = (args) => <<%= name %> {...args} />;

// Reuse that template for creating different stories
export const Base<%= name %> = Template.bind({});
Base<%= name %>.args = { };