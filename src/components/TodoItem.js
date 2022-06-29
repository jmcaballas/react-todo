const TodoItem = ({
  item,
  index,
  deleteTodoItem,
  doneTodoItem,
  editTodoItem,
}) => {
  return (
    <div>
      <li>
        <input type="checkbox" onChange={() => doneTodoItem(index)} />
        <h3 style={{ textDecoration: item.complete ? "line-through" : "" }}>
          {item.todo}
        </h3>
      </li>
      <div>
        <button onClick={() => editTodoItem(index)}>Edit</button>
        <button onClick={() => deleteTodoItem(index)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
