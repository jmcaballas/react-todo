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

  const editTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem, complete: item.complete };
    newTodoItems.splice(index, 1, todoObj);
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.todo = newItem;
    }
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
          editTodoItem={editTodoItem}
        />
      ))}
    </div>
  );
}

export default App;
