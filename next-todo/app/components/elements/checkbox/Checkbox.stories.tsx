// Checkbox.stories.tsx
import React from "react";
import { Story, Meta } from "@storybook/react";
import Checkbox, { CheckboxType } from "./Checkbox"; 

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    isChecked: { control: "boolean" },
    className: { control: "text" },
  },
} as Meta<CheckboxType>;

const Template: Story<CheckboxType> = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  id: "checked-checkbox",
  isChecked: true,
  className: "text-red-500",
  onchange: () => console.log("checked"),
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  id: "unchecked-checkbox",
  isChecked: false,
  className: "text-green-500",
  onchange: () => console.log("unchecked"),
};
