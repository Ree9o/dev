import React from "react";
import { Story, Meta } from "@storybook/react";
import InputTodo from "./inputTodo";
type InputTodoStory = {
  addTodo: (todoTitle: string) => Promise<void>;
};
export default {
  title: "Components/InputTodo",
  component: InputTodo,
} as Meta;

const Template: Story<InputTodoStory> = (args: any) => <InputTodo {...args} />;

export const Default = Template.bind({});
Default.args = {
  addTodo: async (todoTitle: string) => {
    alert(`Todo Added: ${todoTitle}`);
  },
};
