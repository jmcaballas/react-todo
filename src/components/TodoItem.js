const TodoItem = ({
  item,
  index,
  deleteTodoItem,
  doneTodoItem,
  editTodoItem,
}) => {
  return (
    <div className="container card text-bg-light d-flex flex-row align-items-center justify-content-between">
      <li className="d-flex gap-3 align-items-center">
        <input
          type="checkbox"
          onChange={() => doneTodoItem(index)}
          className="form-check-input"
        />
        <h3 style={{ textDecoration: item.complete ? "line-through" : "" }}>
          {item.todo}
        </h3>
      </li>
      <div className="d-flex gap-3">
        <button
          onClick={() => editTodoItem(index)}
          className="btn btn-warning shadow-none"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodoItem(index)}
          className="btn btn-danger shadow-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
