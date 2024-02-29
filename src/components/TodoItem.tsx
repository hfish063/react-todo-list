interface Props {
  completed: boolean;
  id: Crypto;
  title: string;
  toggleTodo: (id: Crypto, completed: boolean) => void;
  deleteTodo: (id: Crypto) => void;
}

function TodoItem({ completed, id, title, toggleTodo, deleteTodo }: Props) {
  return (
    <>
      <li className="list-group-item">
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(event) => toggleTodo(id, event.target.checked)}
          />
          {title}
        </label>
        <button
          type="submit"
          className="btn btn-danger"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
}

export default TodoItem;
