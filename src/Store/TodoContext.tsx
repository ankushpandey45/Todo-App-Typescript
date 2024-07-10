import { createContext, useContext, useState, ReactNode } from "react";

export type todosType = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type todoContext = {
  todos: todosType[];
  handleTodo: (task: string) => void;
  toggleTodoCompleted: (id: string) => void;
  handleDeleteBtn: (id: string) => void;
};

export const TodoCreatecontext = createContext<todoContext | null>(null);

type childrenType = {
  children: ReactNode;
};

const TodoContext = ({ children }: childrenType) => {
  const [todos, setTodos] = useState<todosType[]>([]);

  const handleTodo = (task: string) => {
    setTodos((prev) => {
      const newTodo: todosType = {
        id: Math.random().toString(),
        task: task,
        completed: false,
        createdAt: new Date(),
      };
      return [newTodo, ...prev];
    });
  };

  const toggleTodoCompleted = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteBtn = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoCreatecontext.Provider
      value={{ todos, handleTodo, toggleTodoCompleted, handleDeleteBtn }}
    >
      {children}
    </TodoCreatecontext.Provider>
  );
};

export default TodoContext;

// eslint-disable-next-line react-refresh/only-export-components
export const useTodo = () => {
  const todoConsumer = useContext(TodoCreatecontext);
  if (!todoConsumer) {
    throw new Error("useTodo used outside provider");
  }
  return todoConsumer!;
};
