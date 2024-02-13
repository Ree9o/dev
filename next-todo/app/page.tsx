"use client";
import Todolist from "./components/layouts/ Todolist/Todolist";
import InputTodo from "./components/layouts/inputTodo/inputTodo";
import { useTodos } from "../hooks/useTodos";
export default function Home() {
  const { todos, addTodo, editTodo, removeTodo } = useTodos();
  return (
    <>
      <div className="container m-auto">
        <h1 className="text-3xl text-center mt-5">I am TodoList...</h1>
        <main className="m-10 space-y-5">
          <InputTodo addTodo={addTodo} />
          <Todolist todos={todos} onEdit={editTodo} onRemove={removeTodo} />
        </main>
      </div>
    </>
  );
}
