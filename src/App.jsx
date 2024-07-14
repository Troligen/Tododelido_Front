import { useState } from "react";
import "./App.css";
import TodoCard from "./components/todo_card";
import AddTodo from "./components/add_todo";

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col justify-center items-center">
          <AddTodo todo={todo} setTodo={setTodo} />
          <TodoCard todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
