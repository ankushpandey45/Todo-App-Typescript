import { useSearchParams } from "react-router-dom";
import { useTodo } from "../Store/TodoContext";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ShowTodoList = () => {
  const { todos, toggleTodoCompleted, handleDeleteBtn } = useTodo();

  const [searchParams] = useSearchParams();

  const filterData = searchParams.get("todos");

  console.log("filterData>>", filterData);

  let todosData = todos;

  if (filterData === "active") {
    todosData = todosData.filter((task) => !task.completed);
  }
  if (filterData === "completed") {
    todosData = todosData.filter((task) => task.completed);
  }

  return (
    <div>
      <div className="container">
        <ul>
          {todosData.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                id={todo.id}
                checked={todo.completed}
                onChange={() => toggleTodoCompleted(todo.id)}
              />
              <label className="Task-text" htmlFor={todo.id}>
                {todo.task}
              </label>
              {todo.completed && (
                <button
                  onClick={() => handleDeleteBtn(todo.id)}
                  className="Dlt-btn"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowTodoList;
