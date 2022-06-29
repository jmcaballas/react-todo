import { useState } from "react";

import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      todo: "Task 1",
      complete: false,
    },
    {
      todo: "Task 2",
      complete: false,
    },
    {
      todo: "Task 3",
      complete: false,
    },
  ]);

  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoItems);
  };

  return (
    <div className="">
      <TodoInput createTodoItem={createTodoItem} />
      {todoItems.map((item, index) => (
        <TodoItem key={index} index={index} item={item} />
      ))}
    </div>
  );
}

export default App;
