import React, { useState } from "react";
import DeletedList from "./DeletedList";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const addOrUpdateTodo = () => {
    if (input.trim() === "") return;

    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo,
        ),
      );
      setEditId(null);
    } else {
      setTodos([
        ...todos,
        { id: Date.now(), text: input, isUndone: false, completed: false },
      ]);
    }

    setInput("");
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const editTodo = (todo) => {
    if (todo.completed) return;
    setInput(todo.text);
    setEditId(todo.id);
  };

  const cancelEdit = () => {
    setInput("");
    setEditId(null);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
    setDeletedTodos([...deletedTodos, todo]);
  };

  const undoDelete = (todo) => {
    setDeletedTodos(deletedTodos.filter((t) => t.id !== todo.id));
    setTodos([{ ...todo, isUndone: true }, ...todos]);
  };

  const removeDelete = (todo) => {
    setDeletedTodos(deletedTodos.filter((t) => t.id !== todo.id));
  };

  const filteredTodos = todos.filter((todo) => {
    const matchSearch = todo.text.toLowerCase().includes(search.toLowerCase());

    if (filter === "completed") return todo.completed && matchSearch;
    if (filter === "pending") return !todo.completed && matchSearch;

    return matchSearch;
  });

  return (
    <div style={{ width: 400, margin: "40px auto" }}>
      <h2>Todo App</h2>

      <input
        type="text"
        placeholder="Add todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addOrUpdateTodo}>{editId ? "Update" : "Add"}</button>

      {editId && (
        <button onClick={cancelEdit} style={{ marginLeft: 5 }}>
          Cancel
        </button>
      )}

      <br />
      <br />

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ margin: "10px 0" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <TodoList
        todos={filteredTodos}
        onEdit={editTodo}
        onDelete={deleteTodo}
        onComplete={completeTodo}
      />

      <DeletedList
        deletedTodos={deletedTodos}
        onUndo={undoDelete}
        onRemove={removeDelete}
      />
    </div>
  );
};

export default App;
