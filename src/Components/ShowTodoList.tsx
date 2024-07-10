import { useSearchParams } from "react-router-dom";
import { useTodo } from "../Store/TodoContext";

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
      <ul>
        {todosData.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.completed}
              onChange={() => toggleTodoCompleted(todo.id)}
            />
            <label htmlFor={todo.id}>{todo.task}</label>
            {todo.completed && (
              <button onClick={() => handleDeleteBtn(todo.id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTodoList;
