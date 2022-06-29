const TodoItem = ({ item, id, deleteTodoItem, doneTodoItem, editTodoItem }) => {
  return (
    <div className="container card text-bg-light d-flex flex-row align-items-center justify-content-between">
      <li className="d-flex gap-3 align-items-center">
        <input
          type="checkbox"
          onChange={() => doneTodoItem(id)}
          className="form-check-input"
          checked={item.done}
        />
        <h3 style={{ textDecoration: item.done ? "line-through" : "" }}>
          {item.todo}
        </h3>
      </li>
      <div className="d-flex gap-3">
        <button
          onClick={() => editTodoItem(id)}
          className="btn btn-warning shadow-none"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodoItem(id)}
          className="btn btn-danger shadow-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
