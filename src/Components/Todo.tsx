import { useState, FormEvent } from "react";
import { useTodo } from "../Store/TodoContext";

const Todo = () => {
  const [todoTask, setTodoTask] = useState("");
  const { handleTodo } = useTodo();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleTodo(todoTask);
    setTodoTask("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="todo"
          value={todoTask}
          onChange={(e) => setTodoTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Todo;
