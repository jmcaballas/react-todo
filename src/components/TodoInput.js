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
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
      <input
        type="text"
        placeholder="Add something to do"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control form-control-lg"
      />
      <button onClick={handleSubmit} className="btn btn-warning">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
