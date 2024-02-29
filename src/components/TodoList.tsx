import TodoItem from "./TodoItem";

interface Props {
  todos: any[];
  toggleTodo: (id: Crypto, completed: boolean) => void;
  deleteTodo: (id: Crypto) => void;
  deleteCompleteTodos: () => void;
}

function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  deleteCompleteTodos,
}: Props) {
  return (
    <>
      <h1>Todo List</h1>
      <ul className="list-group">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <TodoItem
              id={todo.id}
              completed={todo.completed}
              title={todo.title}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
      <br></br>
      <button className="btn btn-danger" onClick={() => deleteCompleteTodos()}>
        Clear Completed
      </button>
    </>
  );
}

export default TodoList;
