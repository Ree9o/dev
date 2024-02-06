import React from "react";

import { Story, Meta } from "@storybook/react";

import Todolist from "./Todolist";
type TodolistStory = {
  todos: {
    id: number;
    title: string;
  }[];
  onEdit: (id: number, title: string) => void;
  onRemove: (id: number) => void;
};
export default {
  title: "Example/Todolist",
  component: Todolist,
} as Meta;

const Template: Story<TodolistStory> = (args: any) => <Todolist {...args} />;

export const Default = Template.bind({});
Default.args = {
  todos: [
    { id: 1, title: "Todo 1" },
    { id: 2, title: "Todo 2" },
    { id: 3, title: "Todo 3" },
  ],
  onEdit: (id: number, title: string) => console.log(`Editing ${id}: ${title}`),
  onRemove: (id: number) => console.log(`Removing ${id}`),
}
