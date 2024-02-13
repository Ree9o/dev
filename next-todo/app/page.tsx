"use client";
import Image from "next/image";
import AddTodo from "./components/layouts/AddTodo/AddTodo";
import Todolist from "./components/layouts/ Todolist/Todolist";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const data = [
    { id: "1", title: "1", isChecked: false, isEditing: false },
    { id: "2", title: "2", isChecked: false, isEditing: false },
    { id: "3", title: "3", isChecked: false, isEditing: false },
  ];
  return (
    <>
      <div className="container m-auto">
        <h1 className="text-3xl text-center mt-5">I am TodoList...</h1>
        <main className="m-10 space-y-5">
          <AddTodo
            text={text}
            onchange={(e) => setText(e.target.value)}
            onsubmit={() => console.log(text, "post method")}
          />
          <Todolist
            todos={data}
            onCheck={() => console.log("delete method")}
            onEdit={() => console.log("update method")}
            onConfirmEdit={() => console.log("updated")}
          />
        </main>
      </div>
    </>
  );
}
