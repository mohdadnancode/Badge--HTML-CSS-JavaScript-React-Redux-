import React from "react";

const TodoList = ({ todos, onEdit, onDelete, onComplete }) => {
  return (
    <div>
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              color: todo.isUndone ? "red" : "black",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}

            <button onClick={() => onComplete(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>

            {!todo.completed && (
                <button onClick={() => onEdit(todo)} disabled={todo.completed} style={{opacity: todo.completed? 0.5 : 1, cursor: todo.completed && "not-allowed"
            }}>Edit</button>
            )}
            <button onClick={() => onDelete(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
