import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// import "./index.css";
type Todo = {
  id: string;
  todo: string;
};
type AddTodo = {
  todo: string;
  updateTodoName: string;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isUpdate, setIsUpdate] = useState({ id: "", todo: "" });
  const { register, handleSubmit, reset } = useForm<AddTodo>();

  const addTodo = async (event: AddTodo) => {
    const { todo } = event;
    console.log(todo);
    await axios
      .post("http://localhost:3000/add", {
        data: {
          todo,
        },
      })
      .then((res) => {
        const todo = res.data;
        setTodos((preTodo) => [todo, ...preTodo]);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTodo = async (id: string) => {
    await axios
      .delete("http://localhost:3000/delete", {
        data: {
          id,
        },
      })
      .then(() => {
        const deleteTodos = todos.filter((todo) => todo.id !== id);
        setTodos(deleteTodos);
      })
      .catch((err) => console.log(err));
  };

  const updateTodo = async ({ updateTodoName }: AddTodo) => {
    await axios
      .put("http://localhost:3000/update", {
        data: {
          id: isUpdate.id,
          todo: updateTodoName,
        },
      })
      .then((res) => {
        const newTodo = todos.map((todo) => {
          return todo.id === res.data.id ? res.data : todo;
        });
        setIsUpdate({ id: "", todo: "" });
        setTodos(newTodo);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((res) => {
        console.log(res.data);
        const { todos } = res.data;
        setTodos(todos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto space-y-4  flex flex-col items-center h-screen mt-80">
        {todos.map((todo) => (
          <div key={todo.id}>
            {isUpdate.id === todo.id ? (
              <form onSubmit={handleSubmit(updateTodo)} className="flex gap-4">
                <input
                  type="text"
                  {...register("updateTodoName")}
                  className="border border-stone-200 rounded"
                />
                <button type="submit" className="border-stone-200 font-bold border rounded px-1 ">
                  update
                </button>
              </form>
            ) : (
              <>
                <div className="flex gap-5">
                  <p className="text-green font-bold">{todo.todo}</p>
                  <input type="checkbox" onClick={() => deleteTodo(todo.id)} />
                  <button
                    onClick={() => setIsUpdate({ id: todo.id, todo: todo.todo })}
                    className="border-stone-200 font-bold border rounded px-1 "
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
        <form onSubmit={handleSubmit(addTodo)} className="flex gap-4">
          <input type="text" {...register("todo")} className="border border-stone-200 rounded" />
          <button type="submit" className="border-stone-200 font-bold border p-2 rounded">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
