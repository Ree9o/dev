"use client";
import React, { useState } from "react";
import Button from "../../elements/button/Button";

type TodoItemProps = {
  todo: {
    id: number;
    title: string;
  };
  onEdit: (id: number, title: string) => void;
  onRemove: (id: number) => void;
};

export default function TodoItem({ todo, onEdit, onRemove }: TodoItemProps) {
  const { id, title } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const onConfirm = async () => {
    await onEdit(id, editTitle);
    toggleEdit();
  };
  const onDelete = async () => {
    await onRemove(id);
  };

  return (
    <div className="flex items-center justify-between w-full border ">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border shadow appearance-none focus:outline-none focus:shadow-outline "
          />
          <div>
            <Button className="bg-blue-500" onClick={onConfirm}>
              Confirm
            </Button>
            <Button className="bg-green-500" onClick={toggleEdit}>
              Cancel
            </Button>
          </div>
        </>
      ) : (
        <>
          <h1 className="truncate">{title}</h1>
          <div className="flex ">
            <Button className="bg-red-500" onClick={onDelete}>DELETE</Button>
            <Button className="bg-green-500" onClick={toggleEdit}>
              Edit
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
