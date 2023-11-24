import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
  // State for managing tasks
  const [tasks, setTasks] = useState([]);
  // State for handling new task input
  const [newTask, setNewTask] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Function to toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to remove a task
  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      {/* Input for adding new tasks */}
      <div>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {/* Display the list of tasks */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {/* Checkbox to toggle task completion */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {/* Task text */}
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            {/* Button to remove the task */}
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;