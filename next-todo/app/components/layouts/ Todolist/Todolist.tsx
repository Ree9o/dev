import React from "react";

import TodoItem from "../TodoItem/TodoItem";

type TodolistProps = {
  todos: {
    id: number;
    title: string;
  }[];
  onEdit: (id: number, title: string) => void;
  onRemove: (id: number) => void;
};

export default function Todolist({ todos, onEdit, onRemove }: TodolistProps) {
  return (
    <div className="flex flex-col gap-3 bg-neutral-200 justify-center items-center p-10">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onEdit={onEdit} onRemove={onRemove} />
      ))}
    </div>
  );
}
