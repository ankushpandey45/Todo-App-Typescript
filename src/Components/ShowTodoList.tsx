import { useTodo } from "../Store/TodoContext";

const ShowTodoList = () => {
  const { todos, toggleTodoCompleted, handleDeleteBtn } = useTodo();

  return (
    <div>
      <ul>
        {todos.map((todo) => (
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
