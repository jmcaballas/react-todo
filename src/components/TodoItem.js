const TodoItem = ({ item, index, deleteTodoItem }) => {
  return (
    <div>
      <li>{item.todo}</li>
      <div>
        <button onClick={() => deleteTodoItem(index)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
