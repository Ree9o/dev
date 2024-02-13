"use client";
import { useState, useEffect } from "react";
import { add, edit, remove } from "@/api/todo/route";
import { fetchAndSortTodos } from "@/app/lib/fetchAndSortedTodos";

type TodoItem = {
  id: number;
  title: string;
};
export const useTodos = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const fetched = await fetchAndSortTodos();
      console.log(todos);
      setTodos(fetched);
    };
    fetchTodos();
  }, []);
  const addTodo = async (todoTitle: string) => {
    try {
      const maxId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) : 0;
      let id = maxId + 1; // dynamoDBでauto incrementできないので、このID生成方法は一時的なものです。
      await add({ id: id, title: todoTitle });
      setTodos(await fetchAndSortTodos());
    } catch (error) {
      console.error("Todo の追加に失敗しました", error);
    }
  };

  const editTodo = async (id: number, editTitle: string) => {
    try {
      const response = await edit(id, editTitle);
      console.log(response);
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: editTitle };
        }
        return todo;
      });
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Todo の編集に失敗しました", error);
    }
  };
  const removeTodo = async (id: number) => {
    try {
      await remove(id);
      setTodos(await fetchAndSortTodos());
    } catch (error) {
      console.error("Todo の削除に失敗しました", error);
    }
  };

  return {
    todos,
    addTodo,
    editTodo,
    removeTodo,
  };
};
