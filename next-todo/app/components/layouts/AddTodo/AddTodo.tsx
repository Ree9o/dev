import React from "react";
import Input from "../../elements/input/Input";
import Button from "../../elements/button/Button";

export type AddTodoType = {
  text: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onsubmit: () => void;
};

export default function AddTodo({ text, onchange, onsubmit }: AddTodoType) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onsubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-x-2">
      <Input value={text} onchange={onchange} placeholder="Add a new task" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
