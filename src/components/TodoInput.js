import { useState } from "react";

const TodoInput = ({ createTodoItem }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return alert("Please add something to do");
    }
    createTodoItem(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add something to do"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default TodoInput;
