"use client";
import React, { ChangeEvent, useState } from "react";
import Input from "../../elements/input/Input";
import Button from "../../elements/button/Button";
type InputTodoProps =  {
  addTodo: (todoTitle: string) => Promise<void>;
}
export default function InputTodo({ addTodo }: InputTodoProps) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTodo(todoTitle);
    setTodoTitle("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-x-2">
      <Input
        value={todoTitle}
        onchange={(e: ChangeEvent<HTMLInputElement>) => setTodoTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
