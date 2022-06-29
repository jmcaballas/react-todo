import { useState } from "react";

import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      todo: "Task 1",
      done: false,
    },
    {
      todo: "Task 2",
      done: false,
    },
    {
      todo: "Task 3",
      done: false,
    },
  ]);

  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, done: false }];
    setTodoItems(newTodoItems);
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const doneTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete = !newTodoItems[index].complete;
    setTodoItems(newTodoItems);
  };

  return (
    <div className="">
      <TodoInput createTodoItem={createTodoItem} />
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          index={index}
          item={item}
          deleteTodoItem={deleteTodoItem}
          doneTodoItem={doneTodoItem}
        />
      ))}
    </div>
  );
}

export default App;
