import React from "react";

function TodoList({ tasks, onRemoveTask, onToggleCompletion }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task.id} className="todo-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleCompletion(task.id)}
          />
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>
          <button onClick={() => onRemoveTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
