import React from "react";

const DeletedList = ({ deletedTodos, onUndo, onRemove }) => {
  return (
    <div>
      <h3>Deleted List</h3>
      <ul>
        {deletedTodos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => onUndo(todo)}>Undo</button>
            <button onClick={() => onRemove(todo)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeletedList;
