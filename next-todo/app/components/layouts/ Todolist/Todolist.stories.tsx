import React from "react";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Todolist, { TodolistProps, TodoItemType } from "./Todolist";

export default {
  component: Todolist,
  title: "Layouts/Todolist",
  parameters: {
    docs: {
      description: {
        component: "A component for rendering a list of TODO items.",
      },
    },
  },
} as Meta;

// TODOアイテムのダミーデータ
const todos: TodoItemType[] = [
  {
    id: "1",
    title: "Task 1",
    isChecked: false,
    isEditing: false,
  },
  {
    id: "2",
    title: "Task 2",
    isChecked: true,
    isEditing: false,
  },
  {
    id: "3",
    title: "Task 3",
    isChecked: false,
    isEditing: true,
  },
];

const Template: Story<TodolistProps> = (args) => <Todolist {...args} />;

export const DefaultTodolist = Template.bind({});
DefaultTodolist.args = {
  todos: todos,
  onCheck: action("onCheck"),
  onEdit: action("onEdit"),
  onConfirmEdit: action("onConfirmEdit"),
};
