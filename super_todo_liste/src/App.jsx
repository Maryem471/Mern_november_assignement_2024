import React, { useReducer, useState } from 'react';
import { todoReducer } from './reducer/todoReducer';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Todo List</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <TodoList
        todos={todos}
        onToggle={(id) => dispatch({ type: 'TOGGLE_TODO', payload: id })}
        onDelete={(id) => dispatch({ type: 'REMOVE_TODO', payload: id })}
      />
    </div>
  );
};

export default App;
