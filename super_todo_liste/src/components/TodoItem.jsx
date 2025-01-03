const TodoItem = ({ todo, onToggle, onDelete }) => (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', margin: '0 10px' }}>
        {todo.content}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
  
  export default TodoItem;
  