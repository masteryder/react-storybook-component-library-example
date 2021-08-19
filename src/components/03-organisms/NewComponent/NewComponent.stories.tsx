import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { NewComponent, NewComponentProps } from "./NewComponent";

export default {
  title: "Components/03-organisms/NewComponent",
  component: NewComponent,
} as Meta;

// Create a master template for mapping args to render the NewComponent component
const Template: Story<NewComponentProps> = (args) => <NewComponent {...args} />;

// Reuse that template for creating different stories
export const BaseNewComponent = Template.bind({});
BaseNewComponent.args = { };