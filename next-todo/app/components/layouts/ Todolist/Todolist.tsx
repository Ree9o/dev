import React from "react";
import TodoItem from "../TodoItem/TodoItem"; 
export type TodoItemType = {
  id: string;
  title: string;
  isChecked: boolean;
  isEditing: boolean;
};

export type TodolistProps = {
  todos: TodoItemType[];
  className?: string;
  onCheck: (id: string) => void;
  onEdit: (id: string) => void;
  onConfirmEdit: (id: string, newTitle: string) => void;
};

export default function Todolist({
  todos,
  className,
  onCheck,
  onEdit,
  onConfirmEdit,
}: TodolistProps) {
  const defaultStyles = "flex flex-col gap-3 bg-neutral-200 justify-center items-center";
  const combinedStyles = `${defaultStyles} ${className || ""}`;

  return (
    <div className={combinedStyles}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onCheck={onCheck}
          onEdit={onEdit}
          onConfirmEdit={onConfirmEdit}
        />
      ))}
    </div>
  );
}
