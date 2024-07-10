import Navbar from "./Components/Navbar";
import ShowTodoList from "./Components/ShowTodoList";
import Todo from "./Components/Todo";
import "./App.css";
function App() {
  return (
    <>
      <h1>TODO LIST- REACT + TYPESCRIPT</h1>

      <Navbar />
      <Todo />
      <ShowTodoList />
    </>
  );
}

export default App;
