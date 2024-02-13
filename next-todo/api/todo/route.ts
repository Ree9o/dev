const server = "https://2wpk9e0it3.execute-api.ap-northeast-1.amazonaws.com/items";

type TodoItem = {
  id: number;
  title: string;
};
type EditResponse = {
  success: boolean;
  message: string;
  id: number;
};
export const getAllTodos = async (): Promise<TodoItem[]> => {
  const res = await fetch(server);
  const todos = await res.json();
  return todos;
};
export default getAllTodos;

export const add = async (todo: TodoItem): Promise<TodoItem> => {
  try {
    console.log(todo.id)
    const res = await fetch(server, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: todo.id, title: todo.title }),
    });
    const newTodo = await res.json();
    return newTodo;
  } catch (error) {
    console.error("Error adding todo item:", error);
    throw error;
  }
};

export const edit = async (id: number, editTitle: string): Promise<EditResponse> => {
  try {
    const res = await fetch(`${server}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: editTitle }),
    });
    if (!res.ok) throw new Error("Network response was not ok.");
    const editResponse: EditResponse = await res.json();
    return editResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const remove = async (id: number) => {
  try {
    const res = await fetch(`${server}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to delete the todo item.");
    }
    console.log(`Todo item with id ${id} was successfully deleted.`);
  } catch (error) {
    console.error("Error deleting todo item:", error);
    throw error;
  }
};
