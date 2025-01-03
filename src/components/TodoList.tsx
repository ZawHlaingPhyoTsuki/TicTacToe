"use client";

import { PaginatedTodos, Todo } from "@/types/todo";
import TodoRow from "./TodoRow";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<PaginatedTodos | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/todos?skip=${(page - 1) * 5}&limit=${5}`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [page]);

  const handleNextPage = () => {
    if (todos && page < todos.total) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <>
      <ul className="flex flex-col space-y-2 w-full h-full mt-2 gap-2">
        {todos?.todos.map((todo: Todo) => (
          <TodoRow key={todo.id} {...todo} />
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <Button
          disabled={page === 1}
          onClick={handlePrevPage}
          variant={'outline'}
          className="px-4 py-2 "
        >
          Previous
        </Button>

        <Button
          disabled={!todos || page === todos.total}
          onClick={handleNextPage}
          className="px-4 py-2  "
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default TodoList;
