export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface PaginatedTodos {
  todos: Todo[];
  total: number;
  currentPage: number;
}
