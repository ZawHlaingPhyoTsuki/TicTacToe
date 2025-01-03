import React from "react";
import { Toggle } from "./ui/toggle";
import { Todo } from "@/types/todo";

const TodoRow: React.FC<Todo> = ({ id, todo, completed, userId } : Todo) => {
  return (
    <li className="flex items-center justify-between gap-3 rounded-full py-2 px-5 bg-white shadow-md">
      <p className="line-clamp-1">{todo}</p>
      <Toggle
        variant={"outline"}
        size={"sm"}
        className="rounded-full data-[state=on]:bg-[#67fa67] data-[state=on]:text-white text-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </Toggle>
    </li>
  );
};

export default TodoRow;
