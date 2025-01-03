import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(), // Unique ID
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Remove a task
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm onAddTask={addTask} />
      <TodoList
        tasks={tasks}
        onRemoveTask={removeTask}
        onToggleCompletion={toggleTaskCompletion}
      />
    </div>
  );
}

export default App;
