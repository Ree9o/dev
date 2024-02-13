import React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import AddTodo, { AddTodoType } from "./AddTodo";

export default {
  title: "Layouts/AddTodo",
  component: AddTodo,
  argTypes: {
    onchange: { action: "changed" },
    onsubmit: { action: "clicked" },
  },
} as Meta;

const Template: Story<AddTodoType> = (args) => <AddTodo {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "",
  onchange: action("onchange"),
  onsubmit: action("onclick"),
};
