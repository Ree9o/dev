import React from "react";
<<<<<<< HEAD
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
=======
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TodoItem, { TodoItemProps } from "./TodoItem";

export default {
  component: TodoItem,
  title: "Layouts/TodoItem",
  parameters: {
    docs: {
      description: {
        component: "A component for rendering a TODO item with edit functionality.",
      },
    },
  },
} as Meta;

const Template: Story<TodoItemProps> = (args) => <TodoItem {...args} />;

export const DefaultTodoItem = Template.bind({});
DefaultTodoItem.args = {
  id: "1",
  title: "Task 1",
  isChecked: false,
  isEditing: false,
  onCheck: action("onCheck"),
  onEdit: action("onEdit"),
  onConfirmEdit: action("onConfirmEdit"),
};
export const EditModeTodoItem = Template.bind({});
EditModeTodoItem.args = {
  id: "1",
  title: "Task 1",
  isChecked: false,
  isEditing: true, // Editモードを有効にする
  onCheck: action("onCheck"),
  onEdit: action("onEdit"),
  onConfirmEdit: action("onConfirmEdit"),
>>>>>>> f0ce8dc (add Layouts)
};
