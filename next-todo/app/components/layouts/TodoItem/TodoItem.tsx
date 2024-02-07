import React, { useState } from "react";
import Checkbox from "../../elements/checkbox/Checkbox";
import Button from "../../elements/button/Button";

export type TodoItemProps = {
  id: string;
  title: string;
  isChecked: boolean;
  isEditing: boolean;
  onCheck: (id: string) => void;
  onEdit: (id: string) => void;
  onConfirmEdit: (id: string, newTitle: string) => void;
};

export default function TodoItem({
  id,
  title,
  isChecked = false,
  isEditing = false,
  onCheck,
  onEdit,
  onConfirmEdit,
}: TodoItemProps) {
  const [editText, setEditText] = useState(title);

  return (
    <div className="flex gap-x-2 items-center">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border shadow appearance-none focus:outline-none focus:shadow-outline "
          />
          <Button className="bg-blue-500" onClick={() => onConfirmEdit(id, editText)}>
            Confirm
          </Button>
        </>
      ) : (
        <>
          <div>{title}</div>
          <Checkbox id={id} isChecked={isChecked} onchange={() => onCheck(id)} />
          <Button
            className="bg-green-500"
            onClick={() => {
              onEdit(id);
              setEditText(title);
            }}
          >
            Edit
          </Button>
        </>
      )}
    </div>
  );
}
