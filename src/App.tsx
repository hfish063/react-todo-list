import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<any[]>(() => {
    const localValue = localStorage.getItem("ITEMS");

    if (localValue == null) {
      return [];
    }

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const toggleTodo = (id: Crypto, completed: boolean) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  };

  const deleteTodo = (id: Crypto) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  const deleteCompleteTodos = () => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.completed === false);
    });
  };

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <br></br>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        deleteCompleteTodos={deleteCompleteTodos}
      />
    </>
  );
}

export default App;
