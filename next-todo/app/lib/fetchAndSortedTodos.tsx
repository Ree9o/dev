import getAllTodos from "@/api/todo/route";
export const fetchAndSortTodos = async () => {
  const fetchedTodos = await getAllTodos();
  const sortedTodos = fetchedTodos.sort((a, b) => a.id - b.id);
  return sortedTodos;
};
