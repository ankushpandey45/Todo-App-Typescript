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
      <form onSubmit={handleFormSubmit} className="form">
        <input
          type="text"
          name="todo"
          value={todoTask}
          onChange={(e) => setTodoTask(e.target.value)}
          className="task-input"
          placeholder="Enter Your Task"
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Todo;
