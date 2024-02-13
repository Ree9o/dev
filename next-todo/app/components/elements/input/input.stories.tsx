// Input.stories.tsx
import React from "react";
import { Story, Meta } from "@storybook/react";
import Input, { InputType } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    value: { control: "text" },
    placeholder: { control: "text" },
    className: { control: "text" },
  },
} as Meta;

const Template: Story<InputType> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "",
  onchange: (event) => {
    console.log(event.target.value);
  },
  placeholder: "Add a new task",
  className: "",
};
