import { useState } from "react";

import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      todo: "Task 1",
      done: false,
      id: Math.floor(Math.random() * 10000),
    },
    {
      todo: "Task 2",
      done: false,
      id: Math.floor(Math.random() * 10000),
    },
    {
      todo: "Task 3",
      done: false,
      id: Math.floor(Math.random() * 10000),
    },
  ]);

  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, done: false }];
    setTodoItems(newTodoItems);
  };

  const deleteTodoItem = (id) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(id, 1);
    setTodoItems(newTodoItems);
  };

  const doneTodoItem = (id) => {
    const newTodoItems = [...todoItems];
    newTodoItems[id].complete = !newTodoItems[id].complete;
    setTodoItems(newTodoItems);
  };

  const editTodoItem = (id) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[id];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem, complete: item.complete };
    newTodoItems.splice(id, 1, todoObj);
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.todo = newItem;
    }
    setTodoItems(newTodoItems);
  };

  return (
    <div className="container mt-5 gap-3 d-flex flex-column align-items-center justify-content-center">
      <h1>What shall I do today?</h1>
      <TodoInput createTodoItem={createTodoItem} />
      {todoItems.map((item, id) => (
        <TodoItem
          key={id}
          id={id}
          item={item}
          deleteTodoItem={deleteTodoItem}
          doneTodoItem={doneTodoItem}
          editTodoItem={editTodoItem}
        />
      ))}
    </div>
  );
}

export default App;
