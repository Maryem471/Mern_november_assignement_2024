import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => (
  <div>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
    ))}
  </div>
);

export default TodoList;
