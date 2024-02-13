import React from "react";
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
};
