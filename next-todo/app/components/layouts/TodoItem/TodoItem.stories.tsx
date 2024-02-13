import React from "react";
import { Story, Meta } from "@storybook/react";
import TodoItem from "./TodoItem";
type TodoItemStory = {
  todo: {
    id: number;
    title: string;
  };
  onEdit: (id: number, title: string) => void;
  onRemove: (id: number) => void;
};
export default {
  title: "Components/TodoItem",
  component: TodoItem,
} as Meta;

const Template: Story<TodoItemStory> = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  todo: {
    id: 1,
    title: "Sample Todo",
  },
  onEdit: async (id: number, title: string) => {
    alert(`Editing todo id: ${id} with new title: ${title}`);
  },
  onRemove: async (id: number) => {
    alert(`Removing todo with id: ${id}`);
  },
};
